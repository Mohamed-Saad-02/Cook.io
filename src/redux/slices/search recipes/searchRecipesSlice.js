import { createSlice } from "@reduxjs/toolkit";
import actGetRecipesSearch from "./actSearchRecipes";
import actMoreRecipes from "./actMoreRecipes";

const initialState = {
  recipesSearched: [],
  loading: "idle",
  error: "",
  searchQuery: "",
  nextPage: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getQuery(state, action) {
      state.searchQuery = action.payload;
    },
    clearRecipes(state, action) {
      state.recipesSearched = [];
    },
    getNextPage(state, action) {
      state.nextPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetRecipesSearch.pending, (state, action) => {
      state.recipesSearched = [];
      state.loading = "pending";
      state.error = "";
      state.nextPage = "";
    });
    builder.addCase(actGetRecipesSearch.fulfilled, (state, action) => {
      state.recipesSearched.push(...action.payload.hits);
      state.loading = "succeeded";
      state.error = "";
      state.nextPage = action.payload._links?.next?.href ?? "";
    });
    builder.addCase(actGetRecipesSearch.rejected, (state, action) => {
      state.loading = "failed";
      state.error = "Failed To Fetch Data";
      state.recipesSearched = [];
      state.nextPage = "";
    });

    builder.addCase(actMoreRecipes.pending, (state, action) => {
      state.error = "";
      state.loading = "pending";
    });
    builder.addCase(actMoreRecipes.fulfilled, (state, action) => {
      state.error = "";
      state.loading = "succeeded";
      state.nextPage = action.payload._links?.next?.href ?? "";
      state.recipesSearched.push(...action.payload.hits);
    });
    builder.addCase(actMoreRecipes.rejected, (state, action) => {
      state.loading = "failed";
      state.error = "Failed To Fetch More Data";
    });
  },
});

export const { getQuery, clearRecipes, getNextPage } = searchSlice.actions;

export default searchSlice.reducer;

export const getItems = (state) => state.searchRecipes;
export const getRecipes = (state) => state.searchRecipes.recipesSearched;
export const getLoading = (state) => state.searchRecipes.loading;
export const getError = (state) => state.searchRecipes.error;
export const getSearchQuery = (state) => state.searchRecipes.searchQuery;
