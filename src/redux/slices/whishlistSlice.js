import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addToWhishlist:(state,action)=>{
           state.push(action.payload)
        },
        removeFromWhishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWhishlist,removeFromWhishlist}=whishlistSlice.actions
export default whishlistSlice.reducer