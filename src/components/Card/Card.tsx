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
      <li className="team-card" key={id}>
        <article className="team-card__container">
          <button className="team-card__close">
            <img
              src="../images/icons/remove.svg"
              alt="remove icon"
              width="13"
              height="13"
            />
          </button>
          <button className="team-card__card">
            <img
              src={bgimage}
              alt={`${name} Team`}
              className="team-card__teamImage"
              width="280"
              height="170"
              loading="lazy"
            />
            <h2 className="team-card__title">{name}</h2>
          </button>
          <section className="team-card__info">
            <span className="team-card__rating">{rating}</span>
            <span className="team-card__type">{type}</span>
          </section>
        </article>
      </li>
    </CardStyled>
  );
};

export default Card;
