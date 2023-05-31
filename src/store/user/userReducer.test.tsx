import {
  UserStateMock,
  initialUserStateMock,
} from "../../mocks/userMocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When loginUser is called with a current state, an action with the user payload", () => {
    test("Then it should return the new state with the property isLogged 'true' ", () => {
      const currentState = initialUserStateMock;
      const expectedUserState = UserStateMock;

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(expectedUserState)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
