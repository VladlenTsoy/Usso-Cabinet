export const API_CHANGE_ACCESS_TOKEN = "API_CHANGE_ACCESS_TOKEN";
export const API_DELETE_ACCESS_TOKEN = "API_DELETE_ACCESS_TOKEN";

export const apiChangeAccessToken = (token = false): void =>
    async (dispatch, getState) => {
        if (token)
            localStorage.setItem("token", token);

        if (localStorage.getItem("token") !== null) {
            getState().api.instance.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
            dispatch({type: API_CHANGE_ACCESS_TOKEN, payload: localStorage.getItem("token")});
        }
    };


export const apiDeleteAccessToken = (): void =>
    (dispatch, getState) => {
        localStorage.removeItem("token");
        dispatch({type: API_DELETE_ACCESS_TOKEN,});
    };