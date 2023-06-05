import axios from "axios";
import { useCallback } from "react";
import { useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";
import { useDispatch } from "react-redux";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const dispatch = useDispatch();

  const getTeams = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());
      const {
        data: { teams },
      } = await axios.get(`${apiUrl}/teams`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoaderActionCreator());

      return teams;
    } catch {
      const error = new Error("Can't get Teams");
      throw error;
    }
  }, [dispatch, token]);

  return { getTeams };
};

export default useApi;
