import React from "react";
import CardStyled from "./CardStyled";
import { TeamsStructure } from "../../store/teams/types";
import useTeams from "../../hooks/useTeams/useTeams";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteTeamActionCreator } from "../../store/teams/teamsSlice";
import { useNavigate } from "react-router-dom";

interface CardProps {
  team: TeamsStructure;
  lazyLoading: boolean;
}
const Card = ({
  team: { image, id, name, rating, type, user },
  lazyLoading,
}: CardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/detail/${id}`);
  };

  const userId = useAppSelector((state) => state.userStore.id);

  const { deleteTeam } = useTeams();

  const handleOnDelete = async () => {
    await deleteTeam(id);
    dispatch(deleteTeamActionCreator(id));
  };

  return (
    <CardStyled>
      <li className="team-card" key={id}>
        <article className="team-card__container">
          {userId === user && (
            <button className="team-card__delete" onClick={handleOnDelete}>
              <img
                src="../images/icons/remove.svg"
                alt="remove icon"
                width="13"
                height="13"
              />
            </button>
          )}
          <button className="team-card__card" onClick={handleDetails}>
            <img
              src={image}
              alt={`${name} Team`}
              className="team-card__teamImage"
              width="280"
              height="170"
              loading={`${lazyLoading ? "lazy" : "eager"}`}
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
