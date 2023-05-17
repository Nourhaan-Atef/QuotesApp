import { createAsyncThunk } from "@reduxjs/toolkit";
import { Quotes } from "../../Models/interfaces/quotes";
interface FetchError {
    errorMessage: string | undefined;
}

export const getCertainQuote = createAsyncThunk<Quotes, { id: string },
    { rejectValue: FetchError }>('quotes/getCertainQuote', async (params, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://api.quotable.io/quotes/${params.id}`);
            const data: Quotes = await res.json();
            console.log(res)
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message as FetchError);
        }
    }
    );
