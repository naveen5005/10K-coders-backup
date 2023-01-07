import { add_user, delete_user, update_user } from "./userActionTypes"

export const addUserAction = (user) =>{
    return{
        type: add_user,
        payload : user
    }
}

export const deleteUserAction = (user) =>{
    console.log(user)
    return{
        type : delete_user,
        payload : user
    }
}

export const updateUserAction = (user) =>{
    return{
        type : update_user,
        payload : user
    }
}