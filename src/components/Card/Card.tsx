import React from "react";
import CardStyled from "./CardStyled";
import { TeamsStructure } from "../../store/teams/types";

interface CardProps {
  team: TeamsStructure;
}

const Card = ({
  team: { bgimage, id, name, rating, type },
}: CardProps): React.ReactElement => {
  return (
    <CardStyled>
      <li className="teamCard" key={id}>
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
              src={bgimage}
              alt="Team"
              className="teamCard__teamImage"
              width="280"
              height="170"
              loading="lazy"
            />
            <h2 className="teamCard__title">{name}</h2>
          </button>
          <section className="teamCard__info">
            <span className="teamCard__rating">{rating}</span>
            <span className="teamCard__type">{type}</span>
          </section>
        </article>
      </li>
    </CardStyled>
  );
};

export default Card;
