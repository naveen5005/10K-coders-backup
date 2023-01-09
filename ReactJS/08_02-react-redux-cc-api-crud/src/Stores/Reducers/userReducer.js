import { get_users } from "../Actions/userActionTypes";
import { defaultState } from "../defualtState";

export const userReducer =(state=defaultState,action)=>{
    switch (action.type) {
        case get_users:
            return {...state,users : action.payload}
        default:
            return state;
    }
}