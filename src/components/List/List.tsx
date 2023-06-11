import { TeamsStructure } from "../../store/teams/types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ListStyled from "./ListStyled";

interface ListProps {
  teamProps: TeamsStructure[];
}

const List = ({ teamProps }: ListProps): React.ReactElement => {
  return (
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
      <Button className="button__load-more" text="load more" />
    </ListStyled>
  );
};

export default List;
