import userEvent from "@testing-library/user-event";
import { fireEvent, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Form from "./Form";
import { TeamsStructure } from "../../store/teams/types";

const onSubmit = () => ({});

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the labels of the form", () => {
      const labels = [
        "Teams name",
        "Description",
        "Character 1",
        "Character 2",
        "Character 3",
        "Character 4",
        "Team Rating",
        "Team Type",
        "Team Image",
      ];

      renderWithProviders(<Form onSubmit={onSubmit} />);

      labels.forEach((labels) => {
        const label = screen.getByLabelText(labels);
        expect(label).toBeInTheDocument();
      });
    });
  });

  describe("When the user fills all fields", () => {
    test("Then the button with text 'Create Team' should be enabled", async () => {
      const teamData: Partial<TeamsStructure> = {
        name: "My Team",
        description: "This is my team",
        character1: "Venti",
        character2: "Cyno",
        character3: "Diluc",
        character4: "Barbara",
        rating: "A",
        type: "Explorer",
        bgimage: "https://example.com/image.png",
      };

      renderWithProviders(<Form onSubmit={onSubmit} />);

      const name = screen.getByLabelText("Teams name");
      const description = screen.getByLabelText("Description");
      const character1 = screen.getByLabelText("Character 1");
      const character2 = screen.getByLabelText("Character 2");
      const character3 = screen.getByLabelText("Character 3");
      const character4 = screen.getByLabelText("Character 4");
      const rating = screen.getByLabelText("Team Rating");
      const type = screen.getByLabelText("Team Type");
      const bgimage = screen.getByLabelText("Team Image");

      await userEvent.type(name, teamData.name as string);
      await userEvent.type(description, teamData.description as string);
      await userEvent.selectOptions(character1, teamData.character1 as string);
      await userEvent.selectOptions(character2, teamData.character2 as string);
      await userEvent.selectOptions(character3, teamData.character3 as string);
      await userEvent.selectOptions(character4, teamData.character4 as string);
      await userEvent.selectOptions(rating, teamData.rating as string);
      await userEvent.selectOptions(type, teamData.type as string);
      await userEvent.type(bgimage, teamData.bgimage as string);

      const button = screen.getByRole("button");

      expect(button).toBeEnabled();
    });
  });

  describe("When the user fills all required fields and press the 'Create team' button", () => {
    test("Then it should redirect to home page", async () => {
      const teamData: Partial<TeamsStructure> = {
        name: "My Team",
        description: "This is my team",
        character1: "Venti",
        character2: "Cyno",
        character3: "Diluc",
        character4: "Barbara",
        rating: "A",
        type: "Explorer",
        bgimage: "https://example.com/image.png",
      };

      renderWithProviders(<Form onSubmit={onSubmit} />);

      const name = screen.getByLabelText("Teams name");
      const description = screen.getByLabelText("Description");
      const character1 = screen.getByLabelText("Character 1");
      const character2 = screen.getByLabelText("Character 2");
      const character3 = screen.getByLabelText("Character 3");
      const character4 = screen.getByLabelText("Character 4");
      const rating = screen.getByLabelText("Team Rating");
      const type = screen.getByLabelText("Team Type");
      const bgimage = screen.getByLabelText("Team Image");

      await userEvent.type(name, teamData.name as string);
      await userEvent.type(description, teamData.description as string);
      await userEvent.selectOptions(character1, teamData.character1 as string);
      await userEvent.selectOptions(character2, teamData.character2 as string);
      await userEvent.selectOptions(character3, teamData.character3 as string);
      await userEvent.selectOptions(character4, teamData.character4 as string);
      await userEvent.selectOptions(rating, teamData.rating as string);
      await userEvent.selectOptions(type, teamData.type as string);
      await userEvent.type(bgimage, teamData.bgimage as string);

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(location.pathname).toBe("/");
    });
  });

  describe("When the user writes an image url", () => {
    test('renders with default image when "onError" event is triggered', async () => {
      renderWithProviders(<Form onSubmit={onSubmit} />);

      const bgimage = screen.getByLabelText("Team Image");
      await userEvent.type(bgimage, "http://test");

      const image = screen.getByAltText("Team thumbnail");

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "http://test");

      fireEvent.error(image);

      expect(image).toHaveAttribute("src", "/images/no-image.svg");
    });
  });
});
