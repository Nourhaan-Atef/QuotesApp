import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Quotes } from "../Models/interfaces/quotes";
import { fetchAllQuotes } from "../Middlewares/FetchAllQuotes/FetchAllQuotes";
import { RootState } from "../Store";

interface QuotesState {
    QuotesList: Quotes[];
    loading: boolean;
}

const initialState: QuotesState = {
    QuotesList: [],
    loading: false,
}
const quotesSlice = createSlice({
    name: "quotes",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        // // Fetching All Quotes
        builder.addCase(fetchAllQuotes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllQuotes.fulfilled, (state, action: PayloadAction<Quotes[]>) => {
            state.loading = false;
            state.QuotesList = action.payload;
        });
        builder.addCase(fetchAllQuotes.rejected, (state) => {
            state.loading = false;
        });
    },

})

export const QuotesReducer = quotesSlice.reducer;
export const QouteState = (state: RootState) => state.quotes