import axios from "axios";
import { UserCredentials } from "../../types";

export const apiUrl = import.meta.env.VITE_APP_URL;
const useUser = () => {
  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);
    return token;
  };
  return { getUserToken };
};

export default useUser;
