import axios from "axios";
import { UserCredentials } from "../../types";
import { useDispatch } from "react-redux";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const dispatch = useDispatch();

  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      dispatch(showLoaderActionCreator());
      const { data } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userData
      );
      dispatch(hideLoaderActionCreator());

      return data.token;
    } catch (error) {
      (error as Error).message = "Wrong user name or password";
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
