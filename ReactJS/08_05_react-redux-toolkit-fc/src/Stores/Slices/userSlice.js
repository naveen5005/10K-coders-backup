import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defualtState";
import axios from 'axios';

export const getDataFromServerAsync = createAsyncThunk("users/getDataFromServer",async()=>{
    const response = await axios.get("http://localhost:3001/users2");
    console.log(response)
    return response.data
})
export const deleteDataFromServerAsync = createAsyncThunk("users/deleteDataFromServerAsync",async (user)=>{
    console.log(user)
    const res=await axios.delete("http://localhost:3001/users2/"+user.id)
    const response = await axios.get("http://localhost:3001/users2");
    return response.data
})
export const addDataFromServerAsync = createAsyncThunk("users/addDataFromServerAsync",async (users)=>{
    axios.post("http://localhost:3001/users2/",users);
    const response = await axios.get("http://localhost:3001/users2");
    return response.data
})
export const updateDataFromServerAsync = createAsyncThunk("users/updateDataFromServerAsync",async(user)=>{
    await axios.put("http://localhost:3001/users2/"+user.id,user);
    const response = await axios.get("http://localhost:3001/users2");
    return response.data
})
export const userSlice = createSlice({
    name : "users",
    initialState :defaultState,
    reducers :{
        addUserAction : (state,action)=>{
            console.log(action)
            state.users.push(action.payload)
        },
        deleteUserAction : (state,action)=>{
            console.log(action)
            state.users=state.users.filter((user)=>user.id !== action.payload.id);
        },
        updateUserAction : (state,action)=>{
            state.users.filter((user,i)=>{
                if(user.id === action.payload.id){
                    state.users[i] = action.payload
                }
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getDataFromServerAsync.fulfilled,(state,action)=>{
            console.log(action);
            state.users = action.payload
        });
        builder.addCase(deleteDataFromServerAsync.fulfilled,(state,action)=>{
            state.users = action.payload
        });
        builder.addCase(addDataFromServerAsync.fulfilled,(state,action)=>{
            state.users = action.payload
        });
        builder.addCase(updateDataFromServerAsync.fulfilled,(state,action)=>{
            state.users = action.payload
        })
    }
})

export default userSlice.reducer;
export const {addUserAction,deleteUserAction,updateUserAction} = userSlice.actions