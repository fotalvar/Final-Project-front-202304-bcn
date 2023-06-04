import { screen } from "@testing-library/react";
import { teamMock } from "../../mocks/teamsMocks/teamsMocks";
import renderWithProviders from "../../utils/testUtils";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is redendered", () => {
    test("Then it should show a card with the name 'on Fire!'", () => {
      const expectedText = "On Fire !";

      const team = teamMock[0];

      renderWithProviders(<Card team={team} />);

      const cardText = screen.getByText(expectedText);

      expect(cardText).toBeInTheDocument();
    });
  });
});
