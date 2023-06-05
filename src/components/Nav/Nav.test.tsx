import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";
import Nav from "./Nav";
import { UserStateMock } from "../../mocks/userMocks/userMocks";
import Layout from "../Layout/Layout";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Home icon with an alternative text 'Home page' ", () => {
      const expectedAlternativeText = "Home page";

      renderWithProviders(<Nav />);
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });

    test("Then it should show a Exit icon with an alternative text 'Log out' ", () => {
      const expectedAlternativeText = "Log out";

      renderWithProviders(<Nav />);
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and receives a click on logout button", () => {
    test("Then it should not show the logout button", async () => {
      const userData = UserStateMock;
      renderWithProviders(<Layout />, { userStore: userData });

      const logoutButton = screen.getByRole("button", {
        name: "Logout Log out",
      });

      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });
});
