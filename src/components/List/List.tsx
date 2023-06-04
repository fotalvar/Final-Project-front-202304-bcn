import { TeamsStructure } from "../../store/teams/types";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";

interface ListProps {
  teamProps: TeamsStructure[];
}

const List = ({ teamProps }: ListProps): React.ReactElement => {
  return (
    <ListStyled className="teamCardsList">
      {teamProps.map((teamCard) => (
        <li key={teamCard.id}>
          <Card team={teamCard} />
        </li>
      ))}
    </ListStyled>
  );
};

export default List;
