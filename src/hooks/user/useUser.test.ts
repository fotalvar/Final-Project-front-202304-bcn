import {
  userCredentials,
  userCredentialsFail,
  userToken,
} from "../../mocks/userMocks/userMocks";
import useUser from "./useUser";
import { vi } from "vitest";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { renderHook } from "@testing-library/react";

beforeAll(() => {
  vi.clearAllMocks();
});

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

describe("Given a getUserToken", () => {
  describe("When it receives invalid user credentials", () => {
    test("Then it should return a 'Wrong user name or password' error", () => {
      server.resetHandlers(...errorHandlers);
      const failUser = userCredentialsFail;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const erroraxios = async () => await getUserToken(failUser);

      expect(erroraxios).rejects.toThrowError();
    });
  });
});
