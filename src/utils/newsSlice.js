import { createSlice } from "@reduxjs/toolkit";

const newsSlice=createSlice({
    name:"news",
    initialState:[],
    
    reducers:{
        addNews:(state,action)=>{
            state.push(...action.payload)
            
        },
        removeNews:(state)=>{
           state.length=0
        }

    }
})
export const {addNews,removeNews}=newsSlice.actions;
export default newsSlice.reducer;