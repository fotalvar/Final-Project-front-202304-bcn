import { screen } from "@testing-library/react";
import Nav from "./Nav";
import renderWithProviders from "../../utils/testUtils";

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
});
