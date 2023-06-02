import { userToken } from "../../mocks/userMocks/userMocks";
import useLocalStorage from "./useLocalStorage";

describe("Given a removeToken function", () => {
  describe("When it is called", () => {
    test("Then it should remove the token from the localStorage", () => {
      const { removeToken, setTokenData } = useLocalStorage();
      const key = "token";
      const expectedToken = undefined;

      setTokenData(key, userToken.token);
      const tokenRemovedResult = removeToken(key);

      expect(tokenRemovedResult).toBe(expectedToken);
    });
  });
});
