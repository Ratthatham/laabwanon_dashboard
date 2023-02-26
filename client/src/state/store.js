import {configureStore} from "@reduxjs/toolkit"
import modeReducer from "./slice/modeSlice"

const store = configureStore({
    reducer: {
        mode: modeReducer
    },
})

export default store;