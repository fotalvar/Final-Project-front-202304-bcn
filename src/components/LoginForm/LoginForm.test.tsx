import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Username' in the controller placeholder", () => {
      render(<LoginForm />);

      const userNameTextField = screen.getByPlaceholderText("Username");

      expect(userNameTextField).toBeInTheDocument();
    });
    test("Then it should show the text 'Password' in the controller placeholder", () => {
      render(<LoginForm />);

      const userNameTextField = screen.getByPlaceholderText("Password");

      expect(userNameTextField).toBeInTheDocument();
    });
    test("Then it should show the text 'login' in the button", () => {
      render(<LoginForm />);

      const userNameTextField = screen.getByText("login");

      expect(userNameTextField).toBeInTheDocument();
    });
  });
});
