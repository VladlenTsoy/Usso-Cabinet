export const ADD_CONSTRUCTION_TO_CART = "ADD_CONSTRUCTION_TO_CART";
export const REMOVE_CONSTRUCTION_FROM_CART = "REMOVE_CONSTRUCTION_FROM_CART";

export const addToCartAction = (constructionId): void =>
    (dispatch): void => dispatch({type: ADD_CONSTRUCTION_TO_CART, payload: constructionId});

export const removeFromCartAction = (constructionId): void =>
    (dispatch): void => dispatch({type: REMOVE_CONSTRUCTION_FROM_CART, payload: constructionId});
