import { Admin, Resource } from 'react-admin';
import { Layout } from './Layout';
import dataProvider from './dataProvider';
import { OrderRequestList } from './OrderRequests';
import {UserList} from "./UserList.tsx";
import {ClientList} from "./ClientList.tsx";
import {ClientShow} from "./ClientShow.tsx";
import {OrderShow} from "./OrderShow.tsx";
import {UserShow} from "./UserShow.tsx";
import authProvider from "./authProvider.ts";
import LoginPage from "./LoginPage.tsx";

export const App = () => (
    <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
        <Resource name="taxi" options={{ label: 'Такси' }} list={OrderRequestList} show={OrderShow}/>
        <Resource name="cargo" options={{ label: 'Грузоперевозки' }} list={OrderRequestList} show={OrderShow}/>
        <Resource name="intercity" options={{ label: 'Межгород' }} list={OrderRequestList} show={OrderShow}/>
        <Resource name="drivers" options={{ label: 'Водители' }} list={UserList} show={UserShow}/>
        <Resource name="clients" options={{ label: 'Клиенты' }} list={ClientList} show={ClientShow}/>
    </Admin>
);
