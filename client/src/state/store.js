import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { api } from "./apiSlice"
import modeReducer from "./slice/modeSlice"
import sideBarReducer from "./slice/sideBarSlice"

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        mode: modeReducer,
        sideBarStatus: sideBarReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
setupListeners(store.dispatch);

export default store;