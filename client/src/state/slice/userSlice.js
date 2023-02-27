import { createSlice } from "@reduxjs/toolkit";

const testUserId = '123455'

const initialState = {
    userID: testUserId
}

export const modeSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        setMode: (state)=>{
            state.mode = state.mode === "light"? "dark" : "light"
        }
    }
})

export const {setMode} = modeSlice.actions;
export default modeSlice.reducer;
