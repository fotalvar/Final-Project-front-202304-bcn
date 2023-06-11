import { useAppDispatch } from "../../store";
import { loadMoreActionCreator } from "../../store/teams/teamsSlice";
import { TeamsStructure } from "../../store/teams/types";
import Card from "../Card/Card";
import LoadMore from "../LoadMore/LoadMore";
import ListStyled from "./ListStyled";

interface ListProps {
  teamProps: TeamsStructure[];
}

const List = ({ teamProps }: ListProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreActionCreator());
  };

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
      <LoadMore onClick={handleLoadMore} />;
    </ListStyled>
  );
};

export default List;
