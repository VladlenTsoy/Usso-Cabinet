import {ADD_CONSTRUCTION_TO_CART, REMOVE_CONSTRUCTION_FROM_CART} from "./actions";

export const cartReducer = (state = [], action): any => {
    switch (action.type) {
        case ADD_CONSTRUCTION_TO_CART:
            return [
                ...state, action.payload
            ];
        case REMOVE_CONSTRUCTION_FROM_CART:
            return state.filter((id): any => id !== action.payload);
        default:
            return state;
    }
};