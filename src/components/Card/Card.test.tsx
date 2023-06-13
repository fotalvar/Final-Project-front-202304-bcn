import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { detailMock, teamMock } from "../../mocks/teamsMocks/teamsMocks";
import renderWithProviders from "../../utils/testUtils";
import Card from "./Card";
import ListPage from "../../pages/ListPage/ListPage";

describe("Given a Card component", () => {
  describe("When it is redendered", () => {
    test("Then it should show a card with the name 'on Fire!'", () => {
      const expectedText = "On Fire !";

      const team = teamMock[0];

      renderWithProviders(<Card team={team} lazyLoading />);

      const cardText = screen.getByText(expectedText);

      expect(cardText).toBeInTheDocument();
    });
  });

  describe("When the delete button is clicked", () => {
    test("Then the card mustn't be showned", async () => {
      const expectedTeamName = "On Fire !";
      const buttonName = "remove icon";

      renderWithProviders(<ListPage />, {
        teamsStore: {
          teams: teamMock,
          limit: 0,
          singleTeam: detailMock,
          totalCount: 0,
        },
      });

      const button = screen.getAllByRole("button", { name: buttonName });

      const title = screen.getByRole("heading", { name: expectedTeamName });
      await userEvent.click(button[0]);

      expect(title).not.toBeInTheDocument();
    });
  });
});
