import {DELETE_CURRENT_USER_DATA, FETCH_CURRENT_USER_DATA} from "./actions";

const defaultState = {
    id: null,
};

export const userReducer = (state = defaultState, action): any => {
    switch (action.type) {
        case FETCH_CURRENT_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        case DELETE_CURRENT_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
    }
    return state;
};