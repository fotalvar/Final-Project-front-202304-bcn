import { UiStateStructure } from "../../types";
import {
  hideErrorActionCreator,
  hideLoaderActionCreator,
  showErrorActionCreator,
  showLoaderActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given an uiReducer", () => {
  describe("When it receives an state of isLoading on false", () => {
    test("Then it should return the new state", () => {
      const initialUiState: UiStateStructure = { isLoading: false };
      const newState: UiStateStructure = { isLoading: true };

      const resultState = uiReducer(initialUiState, showLoaderActionCreator());

      expect(newState).toStrictEqual(resultState);
    });
  });

  describe("When it receives an state of isLoading on true", () => {
    test("Then it should return the new state", () => {
      const initialUiState: UiStateStructure = { isLoading: true };
      const newState: UiStateStructure = { isLoading: false };

      const resultState = uiReducer(initialUiState, hideLoaderActionCreator());

      expect(newState).toStrictEqual(resultState);
    });
  });

  describe("When it receives an state of isError on false", () => {
    test("Then it should return the new state", () => {
      const initialUiState: UiStateStructure = { isError: false };
      const newState: UiStateStructure = { isError: true };

      const resultState = uiReducer(
        initialUiState,
        showErrorActionCreator({ isError: true })
      );

      expect(newState).toStrictEqual(resultState);
    });
  });

  describe("When it receives an state of isError on true", () => {
    test("Then it should return the new state", () => {
      const initialUiState: UiStateStructure = { isError: true };
      const newState: UiStateStructure = { isError: false };

      const resultState = uiReducer(initialUiState, hideErrorActionCreator());

      expect(newState).toStrictEqual(resultState);
    });
  });
});
