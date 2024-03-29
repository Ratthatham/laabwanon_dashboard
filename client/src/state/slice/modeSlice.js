import { createSlice } from "@reduxjs/toolkit";
const testUserId = "63701cc1f03239c72c000180"
const initialState = {
    mode: 'dark',
    userId: testUserId
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers:{
        setMode: (state)=>{
            state.mode = state.mode === "light"? "dark" : "light"
        }
    }
})

export const {setMode} = modeSlice.actions;
export default modeSlice.reducer;
