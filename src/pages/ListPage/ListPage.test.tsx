import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import ListPage from "./ListPage";

describe("Given a ListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text includes 'teams'", () => {
      const expectedText = "Teams";

      renderWithProviders(<ListPage />);

      const header = screen.getByRole("heading", { level: 1 });
      const text = header.textContent;

      expect(text).toContain(expectedText);
    });
  });
});
