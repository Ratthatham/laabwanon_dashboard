import {configureStore} from "@reduxjs/toolkit"
import modeReducer from "./slice/modeSlice"
import sideBarReducer from "./slice/sideBarSlice"

const store = configureStore({
    reducer: {
        mode: modeReducer,
        sideBarStatus: sideBarReducer
        
    },
})

export default store;