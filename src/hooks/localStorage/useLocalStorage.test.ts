import { userToken } from "../../mocks/userMocks/userMocks";
import useLocalStorage from "./useLocalStorage";

describe("Given a removeToken function", () => {
  describe("When it is called", () => {
    test("Then it should remove the token from the localStorage", () => {
      const { removeItemLocalStorage, setItemLocalStorage } = useLocalStorage();
      const key = "token";
      const expectedToken = undefined;

      setItemLocalStorage(key, userToken);
      const tokenRemovedResult = removeItemLocalStorage(key);

      expect(tokenRemovedResult).toBe(expectedToken);
    });
  });
});

describe("Given a getToken function", () => {
  describe("When it is called", () => {
    test("Then it should get the token from the localStorage", () => {
      const { getItemLocalStorage, setItemLocalStorage } = useLocalStorage();
      const key = "token";
      const expectedToken = userToken;

      setItemLocalStorage(key, userToken);
      const token = getItemLocalStorage(key);

      expect(token).toBe(expectedToken);
    });
  });
});
