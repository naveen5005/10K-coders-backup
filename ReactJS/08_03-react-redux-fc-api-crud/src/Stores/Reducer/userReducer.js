import { get_users } from "../Actions/userActionTypes";
import { defaultState } from "../defaultState";


export const usersReducer = (state=defaultState,action)=>{
    switch (action.type) {
        case get_users:
            // console.log(action.payload)
            return {...state, users : action.payload}
        default:
            return state;
    }
}