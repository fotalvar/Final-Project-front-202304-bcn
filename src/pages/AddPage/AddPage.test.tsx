import { screen } from "@testing-library/react";
import AddPage from "./AddPage";
import renderWithProviders from "../../utils/testUtils";

describe("Given a AddPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Create Team'", () => {
      const expectedTitle = "Create Team";

      renderWithProviders(<AddPage />);

      const header = screen.getByRole("heading", { level: 1 });
      const title = header.textContent;

      expect(expectedTitle).toContain(title);
    });
  });
});
