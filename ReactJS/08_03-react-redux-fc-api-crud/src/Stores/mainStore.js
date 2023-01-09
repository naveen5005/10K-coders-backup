import { configureStore, isAsyncThunkAction } from "@reduxjs/toolkit";
import { usersReducer } from "./Reducer/userReducer";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer : {
        users : usersReducer
    },
    middleware : [thunk]
})