import axios from "axios";
import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../store";
import { apiUrl } from "../useUser/useUser";
import { useDispatch } from "react-redux";
import {
  hideLoaderActionCreator,
  showErrorActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../routers/paths/paths";
import { TeamsStructure } from "../../store/teams/types";
import { getTotalCountActionCreator } from "../../store/teams/teamsSlice";

const useTeams = () => {
  const { token } = useAppSelector((state) => state.userStore);
  const { limit } = useAppSelector((state) => state.teamsStore);
  const dispatch = useDispatch();

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getTeams = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());
      const {
        data: { teams, totalCount },
      } = await axios.get<{
        teams: TeamsStructure[];
        totalCount: number;
      }>(`${apiUrl}/teams?limit=${limit}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoaderActionCreator());
      dispatch(getTotalCountActionCreator(totalCount));

      return { teams, totalCount };
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
      const { data: newTeam } = await axios.post<{ newTeam: TeamsStructure }>(
        `${apiUrl}${paths.teams}${paths.add}`,
        teamData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      dispatch(
        showErrorActionCreator({
          errorMessage: "Team Created",
          isError: false,
        })
      );

      window.scrollTo(0, 0);
      return newTeam.newTeam;
    } catch (error: unknown) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showErrorActionCreator({
          errorMessage: "Can't add Team",
          isError: true,
        })
      );
      throw error;
    }
  };

  const getTeam = useCallback(
    async (teamId: string): Promise<TeamsStructure | undefined> => {
      dispatch(showLoaderActionCreator());

      try {
        const { data } = await axios.get<{ teamById: TeamsStructure }>(
          `${apiUrl}${paths.teams}${paths.detail}/${teamId}`,
          config
        );
        dispatch(hideLoaderActionCreator());

        return data.teamById;
      } catch (error) {
        dispatch(hideLoaderActionCreator());

        dispatch(
          showErrorActionCreator({
            errorMessage: "Can´t show this Team",
            isError: true,
          })
        );
      }
    },
    [dispatch, config]
  );

  return { getTeams, deleteTeam, addTeam, getTeam };
};
export default useTeams;
