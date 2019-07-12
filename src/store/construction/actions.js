export const FETCH_CONSTRUCTIONS_BY_REGION_ID = "FETCH_CONSTRUCTIONS_BY_REGION_ID";
export const SET_CURRENT_CONSTRUCTION = "SET_CURRENT_CONSTRUCTION";
export const SET_CONSTRUCTIONS_FOR_FILTERS = "SET_CONSTRUCTIONS_FOR_FILTERS";

export const fetchConstructionsByRegionId = (id): void =>
    (dispatch, getState): void =>
        getState().api.instance.get(`/constructions/region/${id}`)
            .then((response): void => dispatch({
                type: FETCH_CONSTRUCTIONS_BY_REGION_ID,
                payload: response.data,
                regionId: id
            }))
            .catch((err): void => err);

export const setCurrentConstructionAction = (construction): void =>
    (dispatch): void => dispatch({type: SET_CURRENT_CONSTRUCTION, payload: construction});

export const setConstructionsForFiltersAction = (constructions, filter): void =>
    (dispatch): void => dispatch({type: SET_CONSTRUCTIONS_FOR_FILTERS, payload: constructions, filter});