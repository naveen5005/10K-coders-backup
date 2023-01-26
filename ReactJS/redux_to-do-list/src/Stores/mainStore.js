import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./Slices/taskSlicer";

export const store = configureStore({
    reducer :{
        tasks:taskReducer,
    }
})