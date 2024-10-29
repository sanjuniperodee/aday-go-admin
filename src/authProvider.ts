import axios from 'axios';

const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;

const authProvider = {
    login: ({ username, password }) => {
        return axios
            .post(`${apiUrl}/v1/user/login`, { username, password })
            .then((response) => {
                // Store the token in localStorage
                localStorage.setItem('token', response.data.token);
            })
            .catch((error) => {
                throw new Error('Invalid credentials');
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
