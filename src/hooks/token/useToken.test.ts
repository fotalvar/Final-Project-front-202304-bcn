import { decodedTokenMock, userToken } from "../../mocks/userMocks/userMocks";
import useToken from "./useToken";

describe("Given a useToken function", () => {
  describe("When it receives a token", () => {
    test("Then it should call the getTokenData and return the decode token", () => {
      const { token } = userToken;
      const decodeToken = decodedTokenMock;

      const { getTokenData } = useToken();

      const expectedToken = getTokenData(token);

      expect(expectedToken).toStrictEqual(decodeToken);
    });
  });
});
