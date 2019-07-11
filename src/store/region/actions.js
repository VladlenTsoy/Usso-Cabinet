export const FETCH_REGIONS = "FETCH_REGIONS";
export const FETCH_REGION_BY_ID = "FETCH_REGION_BY_ID";

export const fetchRegionsAction = (): void =>
    (dispatch, getState): void =>
        getState().api.instance.get("/regions")
            .then((response): void => dispatch({type: FETCH_REGIONS, payload: response.data}))
            .catch((err): void => err);


export const fetchRegionByIdAction = (id): void =>
    (dispatch, getState): void =>
        getState().api.instance.get(`/region/${id}`)
            .then((response): void => dispatch({type: FETCH_REGION_BY_ID, payload: response.data}))
            .catch((err): void => err);
