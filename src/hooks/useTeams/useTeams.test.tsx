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

describe("Given a deleteTeam function", () => {
  describe("When it calls with a valid token and correct user id", () => {
    test("Then it should return a status code 200", async () => {
      const {
        result: {
          current: { deleteTeam },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      const teamId = teamMock[0].id;
      const status = 200;
      const expectedStatus = await deleteTeam(teamId);

      expect(status).toBe(expectedStatus);
    });
  });

  describe("When it calls with a valid token and incorrect user id", () => {
    test("Then it should return undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteTeam },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      const teamId = "prueba";

      const expectedStatus = await deleteTeam(teamId);

      expect(expectedStatus).toBeUndefined();
    });
  });
});
