export const FETCH_CURRENT_USER_DATA = "FETCH_CURRENT_USER_DATA";
export const FETCH_CURRENT_USER_ERROR = "FETCH_CURRENT_USER_DATA";
export const DELETE_CURRENT_USER_DATA = "DELETE_CURRENT_USER_DATA";

export const fetchCurrentUserData = (): void =>
    (dispatch, getState): void =>
        getState().api.instance.get("/user")
            .then((response): void => dispatch({type: FETCH_CURRENT_USER_DATA, payload: response.data}))
            .catch((err): void => dispatch({type: FETCH_CURRENT_USER_ERROR, payload: err}));


export const deleteCurrentUserData = (): void =>
    (dispatch): void =>
        dispatch({
            type: DELETE_CURRENT_USER_DATA,
            payload: {
                id: null,
            }
        });