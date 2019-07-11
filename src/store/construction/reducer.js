import {FETCH_CONSTRUCTIONS_BY_REGION_ID} from "./actions";

export const constructionReducer = (state = {
    region: [],
    current: null,
}, action): any => {
    switch (action.type) {
        case FETCH_CONSTRUCTIONS_BY_REGION_ID:
            return {
                ...state,
                region: {[action.regionId]: action.payload}
            };
        default:
            return state;
    }
};