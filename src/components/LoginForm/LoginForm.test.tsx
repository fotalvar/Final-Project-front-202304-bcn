import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { vi } from "vitest";
import renderWithProviders from "../../utils/testUtils";

const submitMock = vi.fn();

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Username' in the controller placeholder", () => {
      renderWithProviders(<LoginForm handleLoginSubmit={submitMock} />);

      const userNameTextField = screen.getByPlaceholderText("Username");

      expect(userNameTextField).toBeInTheDocument();
    });
    test("Then it should show the text 'Password' in the controller placeholder", () => {
      renderWithProviders(<LoginForm handleLoginSubmit={submitMock} />);

      const userNameTextField = screen.getByPlaceholderText("Password");

      expect(userNameTextField).toBeInTheDocument();
    });
    test("Then it should show the text 'login' in the button", () => {
      renderWithProviders(<LoginForm handleLoginSubmit={submitMock} />);

      const userNameTextField = screen.getByText("login");

      expect(userNameTextField).toBeInTheDocument();
    });
  });
});
