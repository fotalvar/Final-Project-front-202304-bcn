import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import renderWithProviders from "../../utils/testUtils";
import { UserCredentials } from "../../types";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { Provider } from "react-redux";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";
import ListPage from "../ListPage/ListPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the text 'Teams Lmpact logo'", () => {
      const logo = "Teams Impact logo";

      renderWithProviders(<LoginPage />);

      const expectedResult = screen.getByAltText(logo);

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user submit the form with a valid credentials", () => {
    test("Then it should redirect the user to the home page", async () => {
      const expectedText = "Teams";

      const mockUser: UserCredentials = {
        username: "admin",
        password: "admin",
      };
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/user/home",
          element: <ListPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

      const usernamePlaceHolderText = "Username";
      const passwordPlaceHolderText = "Password";
      const usernameTextField = screen.getByPlaceholderText(
        usernamePlaceHolderText
      );
      const passwordTextField = screen.getByPlaceholderText(
        passwordPlaceHolderText
      );
      const button = screen.getByRole("button", { name: "login" });

      await userEvent.type(usernameTextField, mockUser.username);
      await userEvent.type(passwordTextField, mockUser.password);
      await userEvent.click(button);

      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading.textContent).toContain(expectedText);
    });
  });
});
