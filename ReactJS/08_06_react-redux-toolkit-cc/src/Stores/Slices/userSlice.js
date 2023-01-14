import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

export const userSlice = createSlice({
    name :"users",
    initialState : defaultState,
    reducers :{
        addUserAction :(state,action)=>{
            console.log(action)
            state.users = state.users.push(action.payload)
        },
        deleteUserAction : (state,action)=>{
            state.users = state.users.filter((user)=>user.email !== action.payload.email)
        },
        updateUserAction : (state,action)=>{
            console.log(action.payload)
            state.users.filter((user,i)=>{
                if(user.email === action.payload.email){
                    state.users[i] = action.payload
                }
            })
        }
    }
})

export default userSlice.reducer;
export const {addUserAction,deleteUserAction,updateUserAction} = userSlice.actions;