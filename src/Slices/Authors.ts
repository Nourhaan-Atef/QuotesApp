import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../Store";
import { Authors } from "../Models/interfaces/authors";
import { fetchAllAuthors } from "../Middlewares/FetchAllAuthors/FetchAllAuthors";
import { getCertainAuthor } from "../Middlewares/GetCertainAuthor/GetCertainAuthor";

interface AuthorsState {
    AuthorsList: Authors[];
    loading: boolean;
    Author: Authors | null
}

const initialState: AuthorsState = {
    AuthorsList: [],
    loading: false,
    Author: null
}
const authorsSlice = createSlice({
    name: "authors",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        // // Fetching All Quotes
        builder.addCase(fetchAllAuthors.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllAuthors.fulfilled, (state, action: PayloadAction<Authors[]>) => {
            state.loading = false;
            state.AuthorsList = action.payload;
        });
        builder.addCase(fetchAllAuthors.rejected, (state) => {
            state.loading = false;
        });

        // Get Certain Author
        builder.addCase(getCertainAuthor.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCertainAuthor.fulfilled, (state, { payload }: PayloadAction<Authors>) => {
            state.loading = false;
            state.Author = payload;
            console.log(payload)
        });
        builder.addCase(getCertainAuthor.rejected, (state) => {
            state.loading = false;
        });
    },

})

export const AuthorsReducer = authorsSlice.reducer;
export const AuthorState = (state: RootState) => state.authors