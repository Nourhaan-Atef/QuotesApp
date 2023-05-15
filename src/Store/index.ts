import { configureStore } from "@reduxjs/toolkit";
import { QuotesReducer } from "../Slices/Quotes";
const store = configureStore({
    reducer: { quotes: QuotesReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store