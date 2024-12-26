import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newsReducer from "./newsSlice";
import categoriesReducer from "./CategoriesSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        news:newsReducer,
        categories:categoriesReducer
    },
})
export default appStore;