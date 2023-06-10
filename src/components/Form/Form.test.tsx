import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the labels of the form", () => {
      const labels = [
        "Teams name",
        "Description",
        "Characters",
        "Team Rating",
        "Team Type",
        "Team Image",
      ];

      renderWithProviders(<Form />);

      labels.forEach((labels) => {
        const label = screen.getByLabelText(labels);
        expect(label).toBeInTheDocument();
      });
    });
  });
});
