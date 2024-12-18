import jsonServerProvider from 'ra-data-json-server';
import {fetchUtils} from "react-admin";

const httpClient = (url, options) => {
    const token = localStorage.getItem('token');
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

const baseDataProvider = jsonServerProvider(
    `${import.meta.env.VITE_JSON_SERVER_URL}/admin`,
    httpClient
);

const dataProvider = {
    ...baseDataProvider,
    getList: (resource, params) => {
        let actualResource = 'order-requests'; // Default to 'order-requests'
        const filter = { ...params.filter };

        // Map custom resources to 'order-requests' and add filters
        if (resource === 'taxi') {
            filter.orderType = 'TAXI';
        } else if (resource === 'cargo') {
            filter.orderType = 'CARGO';
        } else if (resource === 'intercity') {
            filter.orderType = 'INTERCITY';
        } else if (resource === 'delivery') {
            filter.orderType = 'DELIVERY';
        } else {
            // If it's not one of the custom resources, use the resource name as is
            actualResource = resource;
        }

        return baseDataProvider.getList(actualResource, { ...params, filter });
    },
    getOne: (resource, params) => {
        let actualResource = resource;

        // Map getOne requests for custom resources to 'order-requests'
        if (['taxi', 'cargo', 'intercity'].includes(resource)) {
            actualResource = 'order-requests';
        }

        return baseDataProvider.getOne(actualResource, params);
    },};

export default dataProvider;
