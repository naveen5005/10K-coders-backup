import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/usersReducer";

export const store = configureStore({
    reducer : rootReducer
})