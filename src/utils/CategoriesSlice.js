import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice=createSlice({
    name:"categories",
    initialState:{
        sportsCategory:null,
        politicsCategory:null,
        entertainmentCategory:null,
        technologyCategory:null
    },
    reducers:{
        addSportsCategory:(state,action)=>{
            state.sportsCategory=action.payload;
        },
        addPoliticsCategory:(state,action)=>{
            state.politicsCategory=action.payload;
        },
        addEntertainmentCategory:(state,action)=>{
            state.entertainmentCategory=action.payload;
        },
        addTechnologyCategory:(state,action)=>{
            state.technologyCategory=action.payload
        },

    }

});
export default categoriesSlice.reducer;
export const {addEntertainmentCategory,addPoliticsCategory,addSportsCategory,addTechnologyCategory}=categoriesSlice.actions;