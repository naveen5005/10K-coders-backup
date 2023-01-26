import axios  from "axios";
import { get_users } from "./userActionTypes";

export const getDataFromServer = ()=>{
    return (dispatch)=>{
        getDataFromAPI(dispatch)
    }
}

function getDataFromAPI(dispatch){
    axios.get("http://localhost:3001/users1").then((res)=>{
        console.log(res.data)
        dispatch({
            type : get_users,
            payload : res.data
        })
    })
}

export const addDataFromServer =(user)=>{
    console.log(user)
    return (dispatch)=>{
        axios.post("http://localhost:3001/users1/",user).then(()=>{
            getDataFromAPI(dispatch);
        })
    }
}

export const deleteDataFromServer = (user)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3001/users1/"+user.id).then(()=>{
            getDataFromAPI(dispatch);
        })
    }
}

export const updateDataFromServer = (user)=>{
    console.log(user)
    return (dispatch) =>{
        axios.put("http://localhost:3001/users1/"+user.id,user).then(()=>{
            getDataFromAPI(dispatch)
        })
    }
}