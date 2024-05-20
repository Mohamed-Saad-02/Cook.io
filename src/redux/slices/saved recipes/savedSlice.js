import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addItems(state, action) {
      state.saved.push(action.payload);
    },
    removeItem(state, action) {
      state.saved = state.saved.filter((item) => item.id !== action.payload);
    },
    clearItems(state, action) {
      state.saved = [];
    },
  },
});

export const { addItems, removeItem, clearItems } = savedSlice.actions;
export default savedSlice.reducer;

export const getItems = (state) => state.savedRecipes;
export const getCurrentItem = (id) => (state) => {
  const item = state.savedRecipes.saved.find((item) => item.id === id);
  return item;
};
