import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={testStore}>{children}</Provider>;
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
