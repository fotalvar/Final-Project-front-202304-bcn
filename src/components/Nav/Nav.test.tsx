import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme/theme";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Home icon with an alternative text 'Home page' ", () => {
      const expectedAlternativeText = "Home page";
      const route: RouteObject[] = [{ path: "/", element: <Nav /> }];
      const router = createMemoryRouter(route);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
