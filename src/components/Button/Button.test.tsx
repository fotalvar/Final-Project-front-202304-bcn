import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the name 'test' and a classname 'button_test'", () => {
    test("Then it should show a button with the text 'test' and a classname 'button_test'", () => {
      const text = "test";
      const classname = "button__login";

      renderWithProviders(<Button text={text} className={classname} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
});
