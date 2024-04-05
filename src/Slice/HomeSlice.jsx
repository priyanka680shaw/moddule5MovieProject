import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url : {
        name : "piku"
    },
    genres : {}
}

export const  HomeSlice = createSlice({
    name : "home" , 
    initialState , 
    reducers : {
        getApiConfiguration : (state , action)=>{
            state.url = action.payload
        },
        getGrners : (state , action)=>{
            state.genres = action.payload
        }
    }
})

export const {getApiConfiguration , getGrners} = HomeSlice.actions;
export default HomeSlice.reducer;
