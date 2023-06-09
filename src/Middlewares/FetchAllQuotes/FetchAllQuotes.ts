import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchError {
    errorMessage: string | undefined;
}

export const fetchAllQuotes = createAsyncThunk<any, undefined,
    { rejectValue: FetchError }>('quotes/getAllQuotes', async (params, { rejectWithValue }) => {
        try {
            const response = await fetch('https://api.quotable.io/quotes');
            const data = await response.json();
            console.log(data.results);
            return data.results;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message as FetchError);
        }
    });