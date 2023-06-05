import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "../../types";

const initialState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    showLoader: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoader: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
