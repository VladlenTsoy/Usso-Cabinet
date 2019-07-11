import axios from "axios";
import {API_CHANGE_ACCESS_TOKEN} from "./actions";

const DOMAIN_API = "http://api2.usso.loc/api";

const defaultState = {
    domain: DOMAIN_API,
    instance: axios.create({baseURL: DOMAIN_API}),
};

export const apiReducer = (state = defaultState, action): any => {
    switch (action.type) {
        case API_CHANGE_ACCESS_TOKEN:
            return {
                ...state
            };
        default:
            return state;

    }
};