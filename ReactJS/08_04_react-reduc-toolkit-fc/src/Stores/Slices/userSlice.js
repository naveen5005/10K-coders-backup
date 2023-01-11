import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defualtState";
import axios from 'axios'

export const getAllUsersAsyncAction = createAsyncThunk("users/getAllUsersAsyncAction",async ()=>{
    const response = await axios.get("http://localhost:3001/users1");
    console.log(response)
    return response.data
})
export const addUserAsyncAction = createAsyncThunk("users/addUserAsyncAction",async (users)=>{
    const response = await axios.post("http://localhost:3001/users1",users);
    const res = await axios.get("http://localhost:3001/users1");
    return res.data
})
export const deleteUserAsyncAction = createAsyncThunk("users/deleteUserAsyncAction",async (user)=>{
    // console.log(user)
    const res = await axios.delete("http://localhost:3001/users1/"+user.id)
    const response = await axios.get("http://localhost:3001/users1");
    // console.log(response.data)
    return response.data
})
export const updateUserAsyncAction = createAsyncThunk("users/updateUserAsyncAction",async (user)=>{
    const res = await axios.put("http://localhost:3001/users1/"+user.id,user);
    const response = await axios.get("http://localhost:3001/users1");
    return response.data
})
export const userSlice = createSlice({
    name: 'users',
    initialState : defaultState,
    reducers :{
        addUserAction:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUserAction:(state,action)=>{

            state.users = state.users.filter((user) => user.id !== action.payload.id)
        },
        updateUserAction:(state,action)=>{
            state.users.filter((user,i)=> {
                if(user.id === action.payload.id){
                    state.users[i] = action.payload
                }
            })
        },
    },
    extraReducers :(builder)=>{
        builder.addCase(getAllUsersAsyncAction.fulfilled,(state,action)=>{
            console.log(action);
            state.users = action.payload
        });
        builder.addCase(deleteUserAsyncAction.fulfilled,(state,action)=>{
            state.users = action.payload
        });
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            // console.log(action.payload)
            state.users = action.payload
        });
        builder.addCase(updateUserAsyncAction.fulfilled,(state,action)=>{
            state.users = action.payload
        })
    }
})

export default userSlice.reducer

export const {addUserAction,deleteUserAction,updateUserAction} = userSlice.actions