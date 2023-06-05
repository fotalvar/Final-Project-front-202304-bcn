import axios from "axios";
import { useCallback } from "react";
import { useAppSelector } from "../../store";
import { apiUrl } from "../user/useUser";

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const getTeams = useCallback(async () => {
    try {
      const {
        data: { teams },
      } = await axios.get(`${apiUrl}/teams`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return teams;
    } catch {
      const error = new Error("Can't get Teams");
      throw error;
    }
  }, [token]);

  return { getTeams };
};

export default useApi;
