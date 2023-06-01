import axios from "axios";
import { UserCredentials } from "../../types";

export const apiUrl = import.meta.env.VITE_APP_URL;
const useUser = () => {
  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);
      return token;
    } catch (error) {
      (error as Error).message = "Wrong user name or password";
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
