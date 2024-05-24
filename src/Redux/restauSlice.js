import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants',async()=>
    {
        // const result = await axios.get("https://restau-find-server.onrender.com")
        const result = await axios.get("http://localhost:3000/restaurants")

        localStorage.setItem("allRestaurants",JSON.stringify(result.data))

        return result.data
    })
    

const restauSlice = createSlice({

        name:'restaurants',
        initialState:{
            allRestaurants:[],
            allRestaurantsDummy:[],
            loading:false,
            error:""
        },
    reducers:{

        searchRestaurant : (state,action)=>
            {
                state.allRestaurants = state.allRestaurantsDummy.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
            }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
          state.allRestaurants = action.payload;
          state.allRestaurantsDummy = action.payload;
          state.loading = false;
          state.error = "";
        });
        builder.addCase(fetchRestaurants.pending, (state, action) => {
          state.allRestaurants = [];
          state.allRestaurantsDummy = [];
          state.loading = true;
          state.error = "";
        });
        builder.addCase(fetchRestaurants.rejected, (state, action) => {
          state.allRestaurants = [];
          state.allRestaurantsDummy = [];
          state.loading = false;
          state.error = "API call failed... please try after sometime";
        });
      },
})

export const {searchRestaurant} = restauSlice.actions
export default restauSlice.reducer