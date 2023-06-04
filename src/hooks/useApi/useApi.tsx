import axios from "axios";
import { apiUrl } from "../user/useUser";
import { useCallback } from "react";
import { useAppSelector } from "../../store";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);

  const getTeams = useCallback(async () => {
    try {
      const {
        data: { teams },
      } = await axios.get(`${apiUrl}/teams`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return teams;
    } catch {
      const error = new Error("Error getting the Teams");
      throw error;
    }
  }, [token]);

  return { getTeams };
};

export default useApi;
