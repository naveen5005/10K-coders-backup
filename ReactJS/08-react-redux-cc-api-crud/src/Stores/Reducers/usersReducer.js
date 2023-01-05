import { combineReducers } from "redux";
import { get_users } from "../Actions/actionTypes";
import { defaultState } from "../defaultState";

export const usersReducer =(state=defaultState,action)=>{
    switch (action.type) {
        case get_users:
            return {users : action.payload}
        default:
            return state;
    }
}

export const rootReducer =combineReducers({
    users : usersReducer
})