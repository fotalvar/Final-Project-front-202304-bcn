import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the alternative text 'Teams impact loader icon'", () => {
      const expectedAlternativeText = "Teams impact loader icon";

      renderWithProviders(<Loader />);

      screen.getAllByAltText(expectedAlternativeText);

      expect(expectedAlternativeText).toBeInTheDocument;
    });
  });
});
