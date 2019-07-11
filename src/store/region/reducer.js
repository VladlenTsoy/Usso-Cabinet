export const ADD_REGIONS = "ADD_REGIONS";
export const SELECT_REGION = "SELECT_REGION";

export interface Region {
    id: number,
    title: string,
    lat: number,
    lng: number
}

interface defaultState {
    all: Array<Region>,
    current: Region | null
}

// Default
export const defaultRegionState: defaultState = {
    all: [],
    current: null,
};

export const regionAction = {
    [ADD_REGIONS]: (value: Array<Region>, state): any => ({region: {...state.region, all: value}}),
    [SELECT_REGION]: (value: Region, state): any => ({region: {...state.region, current: value}}),
};