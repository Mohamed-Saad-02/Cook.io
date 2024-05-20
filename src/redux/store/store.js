import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "../slices/saved recipes/savedSlice";
import searchRecipesSlice from "../slices/search recipes/searchRecipesSlice";

const store = configureStore({
  reducer: {
    savedRecipes: savedSlice,
    searchRecipes: searchRecipesSlice,
  },
});

export default store;
