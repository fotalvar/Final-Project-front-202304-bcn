import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TeamsState, TeamsStructure } from "./types";

const InitialTeamsState: TeamsState = { teams: [], limit: 3 };

export const teamsSlice = createSlice({
  name: "teams",
  initialState: InitialTeamsState,

  reducers: {
    loadTeams: (
      currentTeams,
      action: PayloadAction<TeamsStructure[]>
    ): TeamsState => ({ ...currentTeams, teams: [...action.payload] }),

    deleteTeam: (currentState: TeamsState, action: PayloadAction<string>) => ({
      ...currentState,
      teams: currentState.teams.filter((teams) => teams.id !== action.payload),
    }),

    addTeam: (
      currentTeams: TeamsState,
      action: PayloadAction<TeamsStructure>
    ): TeamsState => ({
      ...currentTeams,
      teams: [...currentTeams.teams, action.payload],
    }),
    loadMore: (currentTeams): TeamsState => ({
      ...currentTeams,
      limit: currentTeams.limit + 3,
    }),
  },
});

export const {
  loadTeams: loadTeamsActionCreator,
  deleteTeam: deleteTeamActionCreator,
  addTeam: addTeamActionCreator,
  loadMore: loadMoreActionCreator,
} = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer;
