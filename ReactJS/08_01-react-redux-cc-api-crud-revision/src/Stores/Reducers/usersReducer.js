import { add_user, delete_user, update_user } from "../Actions/userActionTypes";
import { defaultState } from "../defualtState";

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case add_user:
            let newUser = [...state.users]
            newUser.push(action.payload)
            return { users: newUser }
        case delete_user:
            let updatedUsers = [...state.users]
            return {
                users: updatedUsers.filter(
                    (user) => user.email !== action.payload.email
                )
            }
        case update_user:
            let allUsers =[...state.users];
            allUsers.forEach((user,i)=>{
                console.log(user)
                if(user.email === action.payload.email){
                    allUsers[i] = action.payload
                }
            })
            return {users : allUsers}
        default:
            return state;
    }
}