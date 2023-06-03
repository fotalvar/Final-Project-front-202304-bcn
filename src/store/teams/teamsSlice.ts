import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TeamsState, TeamsStructure } from "./types";

const InitialTeamsState: TeamsState = { teams: [] };

export const teamsSlice = createSlice({
  name: "teams",
  initialState: InitialTeamsState,

  reducers: {
    loadTeams: (
      currentTeams,
      action: PayloadAction<TeamsStructure[]>
    ): TeamsState => ({ ...currentTeams, teams: [...action.payload] }),
  },
});

export const { loadTeams: loadTeamsActionCreator } = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer;
