import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {apiReducer} from "./api/reducer";
import {userReducer} from "./user/reducer";
import {regionReducer} from "./region/reducer";
import {constructionReducer} from "./construction/reducer";
import {cartReducer} from "./cart/reducer";

const rootReducer = combineReducers({
    api: apiReducer,
    user: userReducer,
    region: regionReducer,
    construction: constructionReducer,
    cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));