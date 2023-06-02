import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import App from "./App";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths/paths";
import Nav from "../Nav/Nav";
import theme from "../../styles/theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo image with an alternative text 'Teams Impact logo'", () => {
      const expectedAlternativeText = "Teams Impact logo";

      renderWithProviders(<App />);
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});

describe("Given a logOutOnClick function", () => {
  describe("When the log out button is clicked", () => {
    test("Then it should redirect to login page", async () => {
      const routes: RouteObject[] = [
        {
          path: paths.root,
          element: <Nav />,
        },
      ];
      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(router.state.location.pathname).toStrictEqual(paths.root);
    });
  });
});
