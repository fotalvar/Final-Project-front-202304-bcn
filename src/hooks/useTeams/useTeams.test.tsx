import { renderHook } from "@testing-library/react";
import {
  singleTeamMock,
  singleTeamMockFailed,
  teamMock,
} from "../../mocks/teamsMocks/teamsMocks";
import { wrapper } from "../../utils/utils";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import useTeams from "./useTeams";
import { store } from "../../store";

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
  describe("When it calls with a correct user id", () => {
    test("Then it should return a message 'Team deleted'", async () => {
      server.resetHandlers(...handlers);

      const id = teamMock[0].id;
      const message = "Team deleted";

      const {
        result: {
          current: { deleteTeam },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      await deleteTeam(id);

      const expectedMessage = store.getState().uiStore.errorMessage;

      expect(message).toBe(expectedMessage);
    });
  });

  describe("When it calls with a incorrect user id", () => {
    test("Then it should return a message 'Can't delete'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = "invalidaid";
      const message = "Can't delete Team";
      let errorOccurred = false;

      const {
        result: {
          current: { deleteTeam },
        },
      } = renderHook(() => useTeams(), { wrapper: wrapper });

      try {
        await deleteTeam(id);
      } catch (error) {
        errorOccurred = true;
      }

      const expectedMessage = store.getState().uiStore.errorMessage;

      expect(message).toBe(expectedMessage);
      expect(errorOccurred).toBe(true);
    });
  });

  describe("Given an addTeams function", () => {
    describe("When it is called with a valid team", () => {
      test("Then it should return the new team", async () => {
        server.resetHandlers(...handlers);

        const expectedNewTeam = singleTeamMock;

        const {
          result: {
            current: { addTeam },
          },
        } = renderHook(() => useTeams(), { wrapper: wrapper });

        const newTeam = await addTeam(singleTeamMock);

        expect(newTeam).toStrictEqual(expectedNewTeam);
      });
    });

    describe("When it is called with an invalid team", () => {
      test("Then it should return an error", async () => {
        server.resetHandlers(...errorHandlers);

        const team = singleTeamMockFailed;
        const message = "Can't add Team";
        let errorOccurred = false;

        const {
          result: {
            current: { addTeam },
          },
        } = renderHook(() => useTeams(), { wrapper: wrapper });

        try {
          await addTeam(team);
        } catch (error) {
          errorOccurred = true;
        }

        const expectedMessage = store.getState().uiStore.errorMessage;

        expect(message).toBe(expectedMessage);
        expect(errorOccurred).toBe(true);
      });
    });
  });
});
