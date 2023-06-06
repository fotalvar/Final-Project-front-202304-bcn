import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is redendered", () => {
    test("Then it should show a button with text 'Close''", () => {
      const expectedText = "close";

      renderWithProviders(<Modal />);

      const modalButton = screen.getByRole("button", { name: expectedText });

      expect(modalButton).toBeInTheDocument;
    });
  });
});
