import { get_users } from "./userActionTypes";
import axios from "axios";

export const getDataFromActions = () => {
    return (dispatch) => {
        getUsersFromAPI(dispatch)
    }
}

function getUsersFromAPI(dispatch) {
    axios.get("http://localhost:3001/users1").then((response) => {
        console.log(response);
        dispatch({
            type: get_users,
            payload: response.data
        })
    })
}

export const addUserAction = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/users1", user).then(() => {
            getUsersFromAPI(dispatch);
        })
    }

}

export const deleteUserAction = (user) =>{
    return (dispatch) => {
        axios.delete("http://localhost:3001/users1/"+user.id).then(() => {
            getUsersFromAPI(dispatch)
        })
    }
}

export const updateUserAction = (user) =>{
    return (dispatch) =>{
        axios.put("http://localhost:3001/users1/"+user.id,user).then(()=>{
            getUsersFromAPI(dispatch)
        })
    }
}