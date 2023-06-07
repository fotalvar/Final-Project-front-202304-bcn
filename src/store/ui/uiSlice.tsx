import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "../../types";

const initialState: UiStateStructure = {
  isLoading: false,
  isError: false,
  isVisible: false,
  errorMessage: "",
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
      action: PayloadAction<Partial<UiStateStructure>>
    ) => ({
      ...currentUiState,
      isError: action.payload.isError,
      isVisible: true,
      errorMessage: action.payload.errorMessage,
    }),
    hideError: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isError: false,
      isVisible: false,
      errorMessage: "error",
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
