import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IProduct } from "../types/types";

interface HeaderState {
  filteredItems: IProduct[];
  filterInput: string;
}

const initialState: HeaderState = {
  filteredItems: [],
  filterInput: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setFilteredItems(state, action: PayloadAction<IProduct[]>) {
      state.filteredItems = action.payload;
    },
    setFilterInput(state, action: PayloadAction<string>) {
      state.filterInput = action.payload;
    },
  },
});

export const {
  setFilteredItems,
  setFilterInput,
} = headerSlice.actions;

export default headerSlice.reducer;
