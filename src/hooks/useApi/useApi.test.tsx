import { renderHook } from "@testing-library/react";
import { teamMock } from "../../mocks/teamsMocks/teamsMocks";
import useApi from "./useApi";
import { wrapper } from "../../utils/utils";

describe("Given a getTeams function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of Teams", async () => {
      const expectedTeams = teamMock;

      const {
        result: {
          current: { getTeams },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const teamsList = await getTeams();

      expect(expectedTeams).toStrictEqual(teamsList);
    });
  });
});
