import React, {createContext, useReducer, useContext} from "react";
import {defaultUserState, userAction} from "./user/reducer";
import {defaultApiState, apiAction} from "./api/reducer";

// default state
const initialState = {
    user: defaultUserState,
    api: defaultApiState,
};

// Create context with base state
const StoreContext = createContext(initialState);

// Mixin all actions
const Actions = {
    ...userAction,
    ...apiAction,
};

// Main reducer
const reducer = (state, action: { type: string, payload: any }) => {
    const act = Actions[action.type];
    const update = act(action.payload, state);
    return {...state, ...update};
};

// Create Store Provider for App
export const StoreProvider = ({children}: any): any => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>
};

// Create hooks useStore
export const useStore = () => {
    const {state, dispatch}: any = useContext(StoreContext);
    return [state, dispatch];
};
