import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoadMore from "./LoadMore";
import userEvent from "@testing-library/user-event";
import ListPage from "../../pages/ListPage/ListPage";
import { detailMock, teamMock } from "../../mocks/teamsMocks/teamsMocks";
import { vitest } from "vitest";

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'load more'", () => {
      const expectedText = "load more";
      const onClick = vitest.fn;

      renderWithProviders(<LoadMore onClick={onClick} />);

      screen.getByRole("button");

      expect(expectedText).toBeInTheDocument;
    });
  });

  describe("When it is rendered and the user click on the 'load more' button", () => {
    test("Then it should load a card with the title 'Team 4'", async () => {
      const expectedTitle = "Teams 4";
      const buttonText = "load more";

      renderWithProviders(<ListPage />, {
        teamsStore: {
          teams: teamMock,
          limit: 3,
          singleTeam: detailMock,
          totalCount: 0,
        },
      });

      const loadMoreButton = screen.getByRole("button", {
        name: buttonText,
      });

      const title = screen.getByRole("heading", { name: expectedTitle });

      await userEvent.click(loadMoreButton);

      expect(title).toBeInTheDocument();
    });
  });
});
