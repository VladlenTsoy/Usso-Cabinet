import {FETCH_REGIONS} from "./actions";

export interface Region {
    id: number,
    title: string,
    lat: number,
    lng: number
}

interface DefaultState {
    all: Array<Region>,
    current: Region | null
}

// Default
const defaultState: DefaultState = {
    all: [],
    current: null,
};

export const regionReducer = (state = defaultState, action): any => {
    switch (action.type) {
        case FETCH_REGIONS:
            return {
                ...state,
                all: action.payload
            };
        default:
            return state;
    }
};