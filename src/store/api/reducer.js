const axios = require('axios');

export const API_CHANGE_ACCESS_TOKEN = "API_CHANGE_ACCESS_TOKEN";

// const DOMAIN_API = 'http://api2.eon.uz/api';
const DOMAIN_API = 'http://api.eon.loc/api';

// Default
export const defaultApiState = {
    domain: DOMAIN_API,
    token: localStorage.getItem('EON_API_TOKEN_ACCESS'),
    axios: axios,
    guest: axios.create({baseURL: DOMAIN_API}),
    user_general: axios.create({baseURL: DOMAIN_API + '/user'}),
    user_access: axios.create({baseURL: DOMAIN_API + '/user/admin'})
};

/**
 * Actions
 * API_CHANGE_ACCESS_TOKEN = Change key for auth
 */
export const apiAction = {
    [API_CHANGE_ACCESS_TOKEN]: (value: string, state) => ({api: {...state.api, token: value}})
};