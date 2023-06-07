import axios from "axios";
import { useCallback } from "react";
import { useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";
import { useDispatch } from "react-redux";
import {
  hideLoaderActionCreator,
  showErrorActionCreator,
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
      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Can't get Teams",
          isError: true,
        })
      );
    }
  }, [dispatch, token]);

  return { getTeams };
};

export default useApi;
