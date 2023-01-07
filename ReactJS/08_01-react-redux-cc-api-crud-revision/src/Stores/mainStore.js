import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/usersReducer";
export const store = configureStore({
    reducer : {
        users : userReducer
    }
})