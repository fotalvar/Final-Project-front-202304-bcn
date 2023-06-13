import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TeamsState, TeamsStructure } from "./types";
import { emptyTeam } from "../../mocks/teamsMocks/teamsMocks";

const InitialTeamsState: TeamsState = {
  teams: [],
  limit: 3,
  totalCount: 0,
  singleTeam: emptyTeam,
};

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

    getTotalCount: (
      currentTeams: TeamsState,
      action: PayloadAction<number>
    ) => ({
      ...currentTeams,
      totalCount: action.payload,
    }),

    loadSingleTeam: (
      currentTeams: TeamsState,
      action: PayloadAction<TeamsStructure>
    ) => ({
      ...currentTeams,
      singleTeam: action.payload,
    }),
  },
});

export const {
  loadTeams: loadTeamsActionCreator,
  deleteTeam: deleteTeamActionCreator,
  addTeam: addTeamActionCreator,
  loadMore: loadMoreActionCreator,
  getTotalCount: getTotalCountActionCreator,
  loadSingleTeam: loadSingleTeamActionCreator,
} = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer;
