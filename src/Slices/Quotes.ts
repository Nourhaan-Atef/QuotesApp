import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Quotes } from "../Models/interfaces/quotes";
import { fetchAllQuotes } from "../Middlewares/FetchAllQuotes/FetchAllQuotes";
import { RootState } from "../Store";
import { getCertainQuote } from "../Middlewares/GetCertainQuote/GetCertainQuote";

interface QuotesState {
    QuotesList: Quotes[];
    loading: boolean;
    Quote: Quotes | null;
    FavQuotes: Quotes[];
}
interface AddToFavPayload {
    FavQuoteItem: Quotes;
}

const initialState: QuotesState = {
    QuotesList: [],
    loading: false,
    Quote: null,
    FavQuotes: []
}
const quotesSlice = createSlice({
    name: "quotes",
    initialState: initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<AddToFavPayload>) => {
            state.FavQuotes.push(action.payload.FavQuoteItem)
        },
        removeFromFavorite: (state, action: PayloadAction<AddToFavPayload>) => {
            state.FavQuotes= state.FavQuotes.filter(item => item._id !== action.payload.FavQuoteItem._id)
        },
    },
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
        // Get Certain Quote
        builder.addCase(getCertainQuote.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCertainQuote.fulfilled, (state, { payload }: PayloadAction<Quotes>) => {
            state.loading = false;
            state.Quote = payload;
            console.log(payload)
        });
        builder.addCase(getCertainQuote.rejected, (state) => {
            state.loading = false;
        });
        // 
    },

})
export const { addToFavorite,removeFromFavorite } = quotesSlice.actions
export const QuotesReducer = quotesSlice.reducer;
export const QouteState = (state: RootState) => state.quotes