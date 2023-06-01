import { UserTokenStructure } from "../../types";
import jwt_decode from "jwt-decode";

const useToken = () => {
  const getTokenData = (token: string): UserTokenStructure => {
    const decodedToken: { sub: string; user: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      name: decodedToken.sub,
      username: decodedToken.user,
      token,
    };
    return userLoggedData;
  };
  return { getTokenData };
};

export default useToken;
