import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "../../types";

const initialState: UiStateStructure = {
  isLoading: false,
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
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
    showError: (
      currentUiState: UiStateStructure,
      action: PayloadAction<UiStateStructure>
    ) => ({
      ...currentUiState,
      isError: action.payload.isError,
    }),
    hideError: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isError: false,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
