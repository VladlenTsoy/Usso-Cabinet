import {FETCH_CONSTRUCTIONS_BY_REGION_ID, SET_CURRENT_CONSTRUCTION} from "./actions";

export const constructionReducer = (state = {
    region: [],
    filters: [],
    current: null,
}, action): any => {
    switch (action.type) {
        case FETCH_CONSTRUCTIONS_BY_REGION_ID:
            return {
                ...state,
                region: {[action.regionId]: action.payload}
            };
        case SET_CURRENT_CONSTRUCTION:
            return {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};