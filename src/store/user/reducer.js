export const FETCH_CURRENT_USER_DATA = "FETCH_CURRENT_USER_DATA";
export const DELETE_CURRENT_USER_DATA = "DELETE_CURRENT_USER_DATA";

interface Guest {
    id: null
}

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    email: string | null,
    login: string,
    date_of_birth: string | null,
    phone: string | null,
    image: string,
    setting: object,
    hide: number | null,
    block: string | null,
    date_unblock: string | null,
    center_id: number | null,
    group_id: number | null,
    access_id: number | null,
    lang_id: number | null,
    coins: number,
}

// Default
export const defaultUserState: Guest = {
    id: null,
};

/**
 *  Actions
 *  FETCH_CURRENT_USER_DATA     =   Select data current user by Api Key
 *  DELETE_CURRENT_USER_DATA    =   Clear data current user (for Logout)
 */
export const userAction = {
    [FETCH_CURRENT_USER_DATA]: (state: User | Guest) => ({user: state}),
    [DELETE_CURRENT_USER_DATA]: (state: Guest) => ({user: state})
};
