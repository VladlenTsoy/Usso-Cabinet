export const ADD_CONSTRUCTIONS_BY_REGION_ID = "ADD_CONSTRUCTIONS_BY_REGION_ID";

export interface Construction {
    id: number,
    zone: number,
    title: string,
    side: string,
    passport: string,
    region: string,
    region_id: number,
    district: string,
    district_id: number,
    type_id: number,
    type: string,
    format_id: number,
    format: string
}

interface defaultState {
    region: Array<Array<Construction>>,
    current: Construction | null
}

// Default
export const defaultConstructionState: defaultState = {
    region: [],
    current: null,
};

export const constructionAction = {
    [ADD_CONSTRUCTIONS_BY_REGION_ID]: (value: Array<Construction>, state): any => ({
        construction: {
            ...state.region,
            region: value
        }
    }),
};