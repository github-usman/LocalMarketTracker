import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : ''
}

export const searchSlice = createSlice({
    name:'searchBox',
    initialState,
    reducers:{
        search : (state,action) => {
              state.products =  action.payload;
        }
    }
})


export const {search} = searchSlice.actions
export default searchSlice.reducer