import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newsReducer from "./newsSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        news:newsReducer
    },
})
export default appStore;