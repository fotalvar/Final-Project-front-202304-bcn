import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with alternative text '404 error'", () => {
      const imageText = "404 error";

      renderWithProviders(<NotFoundPage />);

      const expectedResult = screen.getByAltText(imageText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
