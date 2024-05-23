import { configureStore } from "@reduxjs/toolkit";
import restauSlice from './restauSlice'

const restauStore = configureStore({
    reducer:{
        restauReducer:restauSlice

    }
})
export default restauStore