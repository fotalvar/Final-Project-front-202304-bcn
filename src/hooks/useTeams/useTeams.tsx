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
import { TeamsStructure } from "../../store/teams/types";

const useTeams = () => {
  const { token } = useAppSelector((state) => state.userStore);
  const { limit } = useAppSelector((state) => state.teamsStore);
  const dispatch = useDispatch();

  const getTeams = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());
      const {
        data: { teams },
      } = await axios.get(`${apiUrl}/teams?limit=${limit}`, {
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
  }, [dispatch, token, limit]);

  const deleteTeam = async (teamId: string) => {
    dispatch(showLoaderActionCreator());
    try {
      await axios.delete(`${apiUrl}${paths.teams}${paths.delete}/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Team deleted",
          isError: false,
        })
      );
      return;
    } catch (error) {
      (error as Error).message = "Can't delete Team";
      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Can't delete Team",
          isError: true,
        })
      );
      throw error;
    }
  };

  const addTeam = async (
    teamData: Partial<TeamsStructure>
  ): Promise<TeamsStructure> => {
    try {
      dispatch(showLoaderActionCreator());
      const { data: newTeam } = await axios.post<TeamsStructure>(
        `${apiUrl}${paths.teams}${paths.add}`,
        teamData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());
      return newTeam;
    } catch (error: unknown) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Can't add Team",
          isError: true,
        })
      );
      throw "Can't add Team";
    }
  };

  return { getTeams, deleteTeam, addTeam };
};
export default useTeams;
