import { userToken } from "../../mocks/userMocks/userMocks";
import useLocalStorage from "./useLocalStorage";

describe("Given a removeToken function", () => {
  describe("When it is called", () => {
    test("Then it should remove the token from the localStorage", () => {
      const { removeToken, setTokenData } = useLocalStorage();
      const key = "token";
      const expectedToken = undefined;

      setTokenData(key, userToken);
      const tokenRemovedResult = removeToken(key);

      expect(tokenRemovedResult).toBe(expectedToken);
    });
  });
});

describe("Given a getToken function", () => {
  describe("When it is called", () => {
    test("Then it should get the token from the localStorage", () => {
      const { getTokenData, setTokenData } = useLocalStorage();
      const key = "token";
      const expectedToken = userToken;

      setTokenData(key, userToken);
      const token = getTokenData(key);

      expect(token).toBe(expectedToken);
    });
  });
});
