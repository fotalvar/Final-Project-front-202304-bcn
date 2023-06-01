import { renderHook } from "@testing-library/react";
import { userCredentials, userToken } from "../../mocks/userMocks/userMocks";
import useUser from "./useUser";

describe("Given a getUserToken", () => {
  describe("When it receives a valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = userToken;
      const user = userCredentials;

      const { result } = renderHook(() => useUser());
      const { getUserToken } = result.current;
      const token = await getUserToken(user);

      expect(token).toStrictEqual(expectedToken);
    });
  });
});
