import { screen } from "@testing-library/react";
import App from "../App/App";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo image with an alternative text 'Teams Impact logo'", () => {
      const expectedAlternativeText = "Teams Impact logo";
      const route: RouteObject[] = [{ path: "/", element: <App /> }];
      const router = createMemoryRouter(route);

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
