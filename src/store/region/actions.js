export const FETCH_REGIONS = "FETCH_REGIONS";
export const SELECT_REGION = "SELECT_REGION";

export const fetchRegionsAction = (): void =>
    (dispatch, getState): void =>
        getState().api.instance.get("/regions")
            .then((response): void => dispatch({type: FETCH_REGIONS, payload: response.data}))
            .catch((err): void => err);
