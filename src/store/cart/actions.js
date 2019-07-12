export const ADD_CONSTRUCTION_TO_CART = "ADD_CONSTRUCTION_TO_CART";
export const REMOVE_CONSTRUCTION_FROM_CART = "REMOVE_CONSTRUCTION_FROM_CART";

export const addToCartAction = (constructionId): void =>
    (dispatch, getState): void => getState().api.instance.get(`/user/cart/${constructionId}`)
        .then((): void => dispatch({type: ADD_CONSTRUCTION_TO_CART, payload: constructionId}))
        .catch((err): void => err);

export const removeFromCartAction = (constructionId): void =>
    (dispatch, getState): void => getState().api.instance.delete(`/user/cart/${constructionId}`)
        .then((): void => dispatch({type: REMOVE_CONSTRUCTION_FROM_CART, payload: constructionId}))
        .catch((err): void => err);
