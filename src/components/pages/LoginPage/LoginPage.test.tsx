import LoginPage from "./LoginPage";
import renderWithProviders from "../../../utils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a controller form with the text 'Username'", () => {
      const text = "Username";

      renderWithProviders(<LoginPage />);

      const controllerText = screen.getByPlaceholderText(text);

      expect(controllerText).toBeInTheDocument;
    });
  });
});
