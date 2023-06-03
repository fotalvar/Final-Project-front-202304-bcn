import { teamMock } from "../../mocks/teamsMocks/teamsMocks";
import { loadTeamsActionCreator, teamsReducer } from "./teamsSlice";
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
