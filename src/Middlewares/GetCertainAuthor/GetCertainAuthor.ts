import { createAsyncThunk } from "@reduxjs/toolkit";
import { Authors } from "../../Models/interfaces/authors";
interface FetchError {
    errorMessage: string | undefined;
}

export const getCertainAuthor = createAsyncThunk<Authors, { id: string },
    { rejectValue: FetchError }>('authors/getCertainAuthor', async (params, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://api.quotable.io/authors/${params.id}`);
            const data: Authors = await res.json();
            console.log(res)
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message as FetchError);
        }
    }
    );
