import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBarOpen: true
}

export const sidebarSlice = createSlice({
    name: 'sideBarStatus',
    initialState,
    reducers:{
        setSideBarOpen: (state)=>{
            state.sideBarOpen = state.sideBarOpen === true? false : true
        }
    }
})

export const {setSideBarOpen} = sidebarSlice.actions;
export default sidebarSlice.reducer;
