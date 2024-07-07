import { createSlice } from "@reduxjs/toolkit";

 const initialState={
coffes : [],
initialized:false

}

const hotCoffeSlice = createSlice({
    //  3 değer alır. name, initialState, reducers
    name:"hotCoffe",
    initialState,
    reducers:{
        setHotCoffe:(state,action)=>{
            state.initialized = true
            state.coffes = action.payload
            console.log(action.payload," setHot coffe de ne var")
        }
    }
})

export const {setHotCoffe} = hotCoffeSlice.actions

export  default hotCoffeSlice.reducer
