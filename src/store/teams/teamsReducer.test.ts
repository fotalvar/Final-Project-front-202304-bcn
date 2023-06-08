import { teamListMock, teamMock } from "../../mocks/teamsMocks/teamsMocks";
import {
  deleteTeamActionCreator,
  loadTeamsActionCreator,
  teamsReducer,
} from "./teamsSlice";
import { TeamsState, TeamsStructure } from "./types";

describe("Given an loadTeams function", () => {
  describe("When it receives an empty initial state and a loadTeams action", () => {
    test("Then it should return the new state a list with 2 Teams", () => {
      const initialTeamsState: TeamsStructure[] = [];

      const currentState: TeamsState = { teams: initialTeamsState };

      const Teams = loadTeamsActionCreator(teamMock);

      const expectedNewTeamsState: TeamsState = {
        ...initialTeamsState,
        teams: teamMock,
      };

      const newState: TeamsState = teamsReducer(currentState, Teams);

      expect(expectedNewTeamsState).toStrictEqual(newState);
    });
  });
});

describe("Given a deleteTeam reducer", () => {
  describe("When it is called with a current team state and an action with an id", () => {
    test("Then it should return the team list without the team with this id", () => {
      const currentState = teamListMock;
      const newDeletedTeamState = { ...teamListMock, teams: [] };

      const newTeamState = teamsReducer(
        currentState,
        deleteTeamActionCreator(currentState.teams[0].id)
      );

      expect(newTeamState).toStrictEqual(newDeletedTeamState);
    });
  });
});
