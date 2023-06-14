import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPage from "./AddPage";
import renderWithProviders from "../../utils/testUtils";
import { vi } from "vitest";
import { TeamsStructure } from "../../store/teams/types";
import { store } from "../../store";

describe("Given a AddPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Create Team'", () => {
      const expectedTitle = "Create Team";

      renderWithProviders(<AddPage />);

      const header = screen.getByRole("heading", { level: 1 });
      const title = header.textContent;

      expect(expectedTitle).toContain(title);
    });
  });

  describe("When it's rendered and all the inputs fields are filled in and the user clicks the 'Create Team' button", () => {
    test("Then it should show the new team redirected on the home page", async () => {
      const createButtonText = "create team";
      const expectedFeedbackMessage = "Team Created";

      renderWithProviders(<AddPage />);

      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      const teamData: Partial<TeamsStructure> = {
        name: "My Team",
        description: "This is my team",
        character1: "Venti",
        character2: "Cyno",
        character3: "Diluc",
        character4: "Barbara",
        rating: "A",
        type: "Explorer",
        image: "https://example.com/image.png",
      };

      const name = screen.getByLabelText("Teams name");
      const description = screen.getByLabelText("Description");
      const character1 = screen.getByLabelText("Character 1");
      const character2 = screen.getByLabelText("Character 2");
      const character3 = screen.getByLabelText("Character 3");
      const character4 = screen.getByLabelText("Character 4");
      const rating = screen.getByLabelText("Team Rating");
      const type = screen.getByLabelText("Team Type");
      const image = screen.getByLabelText("Team Image");

      await userEvent.type(name, teamData.name as string);
      await userEvent.type(description, teamData.description as string);
      await userEvent.selectOptions(character1, teamData.character1 as string);
      await userEvent.selectOptions(character2, teamData.character2 as string);
      await userEvent.selectOptions(character3, teamData.character3 as string);
      await userEvent.selectOptions(character4, teamData.character4 as string);
      await userEvent.selectOptions(rating, teamData.rating as string);
      await userEvent.selectOptions(type, teamData.type as string);
      await userEvent.type(image, teamData.image as string);

      const createButton = screen.getByRole("button", {
        name: createButtonText,
      });

      await userEvent.click(createButton);

      const feedbackMessage = await store.getState().uiStore.errorMessage;

      await expect(feedbackMessage).toBe(expectedFeedbackMessage);
    });
  });
});
