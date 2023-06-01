import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import renderWithProviders from "../../utils/testUtils";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the text 'Teams Lmpact logo'", () => {
      const logo = "Teams Impact logo";

      renderWithProviders(<LoginPage />);

      const expectedResult = screen.getByAltText(logo);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
