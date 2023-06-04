import axios from "axios";
import { useAppSelector } from "../../store";
import { TeamsState, TeamsStructure } from "../../store/teams/types";
import { apiUrl } from "../user/useUser";

const useTeams = () => {
  const token = useAppSelector((state) => state.user.token);

  const request = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getTeams = async (): Promise<TeamsStructure[]> => {
    const {
      data: { teams },
    } = await axios.get<TeamsState>(`${apiUrl}/teams`, request);
    return teams;
  };

  return { getTeams };
};

export default useTeams;
