import { TeamsStructure } from "../../store/teams/types";
import ListStyled from "./ListStyled";

interface ListProps {
  Teams: TeamsStructure[];
}
const List = ({ Teams }: ListProps): React.ReactElement => {
  return (
    <ListStyled className="teamCardsList">
      {Teams.map((team) => (
        <li className="teamCard" key={team.id}>
          <article className="teamCard__container">
            <button className="teamCard__close">
              <img
                src="../images/icons/remove.svg"
                alt="remove icon"
                width="13"
                height="13"
              />
            </button>
            <button className="teamCard__card">
              <img
                src={team.bgimage}
                alt="Team"
                className="teamCard__teamImage"
              />
              <h2 className="teamCard__title">{team.name}</h2>
            </button>
            <section className="teamCard__info">
              <span className="teamCard__rating">{team.rating}</span>
              <span className="teamCard__type">{team.type}</span>
            </section>
          </article>
        </li>
      ))}
    </ListStyled>
  );
};

export default List;
