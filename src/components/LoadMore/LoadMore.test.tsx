import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoadMore from "./LoadMore";

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'load more'", () => {
      const expectedText = "load more";

      renderWithProviders(<LoadMore onClick={() => ({})} />);

      screen.getByRole("button");

      expect(expectedText).toBeInTheDocument;
    });
  });
});
