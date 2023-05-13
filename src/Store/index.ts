import { configureStore } from "@reduxjs/toolkit";
import { QuotesReducer } from "../Slices/Quotes";
const store = configureStore({
    reducer: { quotes: QuotesReducer }
})

export default store