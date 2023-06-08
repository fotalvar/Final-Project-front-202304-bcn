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
import paths from "../../routers/paths/paths";

const useTeams = () => {
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

  const deleteTeam = async (teamId: string) => {
    try {
      dispatch(showLoaderActionCreator());

      await axios.delete(`${apiUrl}${paths.home}/${teamId}`),
        { headers: { Authorization: `Bearer ${token}}` } };
      dispatch(hideLoaderActionCreator());
    } catch {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Team deleted",
          isError: true,
        })
      );
    }
  };
  return { getTeams, deleteTeam };
};
export default useTeams;
