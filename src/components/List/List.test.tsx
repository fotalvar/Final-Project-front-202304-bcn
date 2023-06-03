import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import List from "./List";
import { teamMock } from "../../mocks/teamsMocks/teamsMocks";

describe("Given a List component", () => {
  describe("When it's rendered ", () => {
    test("Then it should show a heading with the name of the team", () => {
      renderWithProviders(<List Teams={teamMock} />);

      const teamName = screen.getAllByRole("heading", { level: 2 });

      expect(teamName).toBeTruthy();
    });
  });
});
