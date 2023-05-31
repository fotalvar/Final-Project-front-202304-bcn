import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { vi, vitest } from "vitest";
import renderWithProviders from "../../utils/testUtils";
import { UserCredentials } from "../../types";

const submitMock = vi.fn();

describe("Given a LoginForm component", () => {
  const usernamePlaceholder = "Username";
  const passwordPlaceholder = "Password";

  const userLoginData: UserCredentials = {
    username: "Fede",
    password: "Fede",
  };

  const onClick = vi.fn();

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

  describe("When the user types the text 'Fede' in the username and the passowrd in the textfields", () => {
    test("Then the username the password should show 'Fede'", async () => {
      renderWithProviders(<LoginForm handleLoginSubmit={onClick} />);

      const expectedUsernamePlaceholder =
        screen.getByPlaceholderText(usernamePlaceholder);

      const expectedPasswordPlaceholder =
        screen.getByPlaceholderText(passwordPlaceholder);

      await userEvent.type(expectedUsernamePlaceholder, userLoginData.username);
      await userEvent.type(expectedPasswordPlaceholder, userLoginData.password);

      expect(expectedUsernamePlaceholder).toHaveValue(userLoginData.username);
      expect(expectedPasswordPlaceholder).toHaveValue(userLoginData.password);
    });
  });

  describe("When the user complete the fields and click on 'login' button", () => {
    test("Then it should call the handleOnSubmit function", async () => {
      const handleOnSubmit = vitest.fn();

      renderWithProviders(<LoginForm handleLoginSubmit={handleOnSubmit} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);

      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);

      const loginButton = screen.getByRole("button", { name: "login" });

      await userEvent.type(usernamePlaceholderField, userLoginData.username);
      await userEvent.type(passwordPlaceholderField, userLoginData.password);
      await userEvent.click(loginButton);

      expect(handleOnSubmit).toHaveBeenCalled();
    });
  });
});
