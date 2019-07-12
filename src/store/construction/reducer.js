import {FETCH_CONSTRUCTIONS_BY_REGION_ID, SET_CONSTRUCTIONS_FOR_FILTERS, SET_CURRENT_CONSTRUCTION} from "./actions";

export const constructionReducer = (state = {
    region: [],
    filters: {
        all: [],
        zone: [],
        district_id: [],
        type_id: [],
        format_id: [],
        status: [],
    },
    current: null,
}, action): any => {
    switch (action.type) {
        case FETCH_CONSTRUCTIONS_BY_REGION_ID:
            return {
                ...state,
                region: {...state.region, [action.regionId]: action.payload}
            };
        case SET_CURRENT_CONSTRUCTION:
            return {
                ...state,
                current: action.payload
            };
        case SET_CONSTRUCTIONS_FOR_FILTERS:
            return {
                ...state,
                filters: {...state.filters, [action.filter]: action.payload}
            };
        default:
            return state;
    }
};