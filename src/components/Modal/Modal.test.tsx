import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Modal from "./Modal";
import { store } from "../../store";

describe("Given a Modal component", () => {
  describe("When it is redendered", () => {
    test("Then it should show a button with text 'Close''", () => {
      const expectedText = "close";

      renderWithProviders(<Modal />);

      const modalButton = screen.getByRole("button", { name: expectedText });

      expect(modalButton).toBeInTheDocument;
    });

    test("Then it should show a button and when it is clicked, the message should not appear", async () => {
      const textButton = "close";

      renderWithProviders(<Modal />, {
        uiStore: {
          isVisible: true,
          isLoading: false,
          isError: true,
          errorMessage: "error",
        },
      });

      const closeButton = screen.getByRole("button", { name: textButton });

      await userEvent.click(closeButton);

      const testStore = store.getState();

      expect(testStore.uiStore.errorMessage).toBe("");
    });
  });
});
