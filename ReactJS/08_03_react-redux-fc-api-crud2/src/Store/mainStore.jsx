import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/userReducer";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer :{
        users : userReducer,
    },
    middleware :[thunk]
})