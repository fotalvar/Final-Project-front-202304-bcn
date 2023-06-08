import { renderHook } from "@testing-library/react";
import { teamMock } from "../../mocks/teamsMocks/teamsMocks";
import { wrapper } from "../../utils/utils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import useTeams from "./useTeams";

describe("Given a getTeams function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of Teams", async () => {
      const expectedTeams = teamMock;

      const {
        result: {
          current: { getTeams },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      const teamsList = await getTeams();

      expect(expectedTeams).toStrictEqual(teamsList);
    });
  });

  describe("When it is called and return an error", () => {
    test("Then it should dispatch the action showErrorActionCreator", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getTeams },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      const error = await getTeams();

      expect(error).toBeUndefined();
    });
  });
});
