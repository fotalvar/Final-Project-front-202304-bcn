import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import DetailPage from "./DetailPage";

describe("Given a DetailPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the alternative text 'Background team'", () => {
      const expectedText = "Background team";

      renderWithProviders(<DetailPage />);

      const header = screen.getByAltText(expectedText);

      expect(header).toBeInTheDocument();
    });
  });
});
