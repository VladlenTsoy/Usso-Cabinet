import {FETCH_REGION_BY_ID, FETCH_REGIONS} from "./actions";

export interface Region {
    id: number,
    title: string,
    lat: number,
    lng: number
}
// interface DefaultState {
//     all: Array<Region>,
//     current: Region | null
// }

export const regionReducer = (state = {
    all: [],
    current: null,
}, action): any => {
    switch (action.type) {
        case FETCH_REGIONS:
            return {
                ...state,
                all: action.payload
            };
        case FETCH_REGION_BY_ID:
            return {
                ...state,
                current: action.payload
            };
        default:
            return state;
    }
};