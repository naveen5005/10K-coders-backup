import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Reducers/userReducer";
export const store = configureStore({
    reducer :{
        users : usersReducer
    }
})