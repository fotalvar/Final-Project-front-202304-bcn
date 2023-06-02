import jwt_decode from "jwt-decode";
import { DecodedUserDataStructure } from "../../types";

const useToken = () => {
  const getTokenData = (token: string): DecodedUserDataStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: DecodedUserDataStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };

    return userData;
  };

  return { getTokenData };
};

export default useToken;
