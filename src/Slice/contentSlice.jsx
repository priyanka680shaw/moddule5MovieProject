import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : ["piku" , "shaw"],
};

const count = createSlice({
    name : "count",
    initialState,
    reducers :{
        setState : (state , action)=>{
            state.count = action.payload;
        }
    }

})
export const {setState} = count.actions;
export default count.reducer;