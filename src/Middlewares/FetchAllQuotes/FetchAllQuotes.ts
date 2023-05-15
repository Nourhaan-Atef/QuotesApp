// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Quotes } from "../../Models/interfaces/quotes";
// interface FetchError {
//     errorMessage: string | undefined;
// }
// export const fetchAllQuotes = createAsyncThunk<Quotes[], undefined, { rejectValue: FetchError }>(
//     "quotes/fetchAllQuotes",
//     async (params, { rejectWithValue }) => {
//         try {
//             const res = await fetch("https://api.quotable.io/quotes");
//             console.log(res)
//             // const data: Quotes[] = await res.data;
//             // return data;
//         } catch (e: any) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

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