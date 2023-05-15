import { configureStore } from "@reduxjs/toolkit";
import { QuotesReducer } from "../Slices/Quotes";
import { AuthorsReducer } from "../Slices/Authors";

const store = configureStore({
    reducer: { quotes: QuotesReducer, authors: AuthorsReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store