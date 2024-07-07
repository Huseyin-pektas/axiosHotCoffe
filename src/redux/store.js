import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  HotCoffeReducer from "./hotCoffeSlice"


const rootReducer = combineReducers({
   hotCoffeState : HotCoffeReducer
})

export const store = configureStore({
    reducer: rootReducer
})

