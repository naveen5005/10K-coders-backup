import { createSlice } from "@reduxjs/toolkit";

const defaultState ={
    tasks :[]
}

export const taskSlicer = createSlice({
    name:Tasks,
    initialState : defaultState,

})