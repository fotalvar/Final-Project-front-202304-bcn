import { TeamsStructure } from "../../store/teams/types";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";

interface ListProps {
  teamProps: TeamsStructure[];
}

const List = ({ teamProps }: ListProps): React.ReactElement => {
  return (
    <>
      <ListStyled className="teamCardsList">
        {teamProps.map((teamCard, index) => {
          const isFirstCard = index <= 1;
          return (
            <li key={teamCard.id}>
              {isFirstCard ? (
                <Card team={teamCard} lazyLoading={false} />
              ) : (
                <Card team={teamCard} lazyLoading={true} />
              )}
            </li>
          );
        })}
      </ListStyled>
    </>
  );
};

export default List;
