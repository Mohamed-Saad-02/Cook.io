import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actMoreRecipes = createAsyncThunk(
  "search/actMoreRecipes",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const {
      searchRecipes: { nextPage },
    } = getState();
    if (!nextPage) return rejectWithValue();
    try {
      const response = await axios.get(nextPage);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export default actMoreRecipes;
