import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo image with an alternative text 'Teams Impact logo'", () => {
      const expectedAlternativeText = "Teams Impact logo";

      renderWithProviders(<Layout />);
      const imageAltText = screen.getByAltText(expectedAlternativeText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
