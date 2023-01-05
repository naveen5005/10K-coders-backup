import axios  from "axios";
import { get_users } from "./actionTypes";

export const getUsersFromServerAction=()=>{
    return (dispatch) =>{
        getLatestUsers(dispatch);
    }
}

export const deleteUserAction = (id) =>{
    return(dispatch)=>{
        axios.delete("http://localhost:3001/users1/"+id).then(()=>{
            getLatestUsers(dispatch)
        });
    };
};

function getLatestUsers(dispatch){
    axios.get("http://localhost:3001/users1").then((response)=>{
        console.log(response.data);
        dispatch({
            type : get_users,
            payload : response.data
        })
    })
}