import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const appRecipeID = "99a7fcd5";
const appRecipesKey = "598182ba5381c5906d27e353d2fb4028";

const actGetRecipesSearch = createAsyncThunk(
  "search/actGetRecipesSearch",
  async (arg, thunkAPI) => {
    const { word = "", queries = "" } = arg;
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appRecipeID}&app_key=${appRecipesKey}&field=image&field=label&field=totalTime${word ? `&q=${word}` : ""}${queries ? `${queries}` : ""}`,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export default actGetRecipesSearch;
