import {FETCH_CONSTRUCTIONS_BY_REGION_ID} from "./actions";

// Default
const defaultState = {
    region: [],
    current: null,
};

export const constructionReducer = (state = defaultState, action): any => {
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