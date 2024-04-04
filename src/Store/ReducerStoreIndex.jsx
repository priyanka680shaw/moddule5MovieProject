import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Slice/MovieSlice";
import contentSlice from "../Slice/contentSlice";
const ReducerStoreIndex = configureStore(
    {
        reducer :{
            MovieSlice , contentSlice
        }
    }
) 
export default ReducerStoreIndex;