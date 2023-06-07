import { uiStateMock } from "../../mocks/uiMocks/uiMocks";
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
      const initialUiState: UiStateStructure = uiStateMock;
      const newState: UiStateStructure = {
        ...uiStateMock,
        isError: true,
      };

      const resultState = uiReducer(
        initialUiState,
        showErrorActionCreator({ isError: true, errorMessage: "error" })
      );

      expect(newState).toStrictEqual(resultState);
    });
  });
});

describe("Given a hideError reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new modal state set to false", () => {
      const currentUiState: UiStateStructure = uiStateMock;
      const expectedUiState: UiStateStructure = {
        ...uiStateMock,
        isVisible: false,
        isError: false,
      };

      const newUiState = uiReducer(currentUiState, hideErrorActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
