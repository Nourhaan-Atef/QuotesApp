import { createSlice } from "@reduxjs/toolkit"

const quotesSlice = createSlice({
    name: "quotes",
    initialState: [],
    reducers: {}

})

// export const { } = quotesSlice.actions

export const QuotesReducer = quotesSlice.reducer;