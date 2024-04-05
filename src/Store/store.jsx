import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../Slice/HomeSlice";

export const store = configureStore(
    {
        reducer: {
            home : HomeSlice , 
        }
    }
)