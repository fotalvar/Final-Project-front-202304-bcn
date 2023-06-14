import React, { useEffect } from "react";
import DetailPageStyled from "./DetailPageStyled";
import useTeams from "../../hooks/useTeams/useTeams";
import { useAppDispatch, useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { loadSingleTeamActionCreator } from "../../store/teams/teamsSlice";
import { TeamsStructure } from "../../store/teams/types";

const DetailPage = (): React.ReactElement => {
  const { teamId } = useParams();
  const { getTeam } = useTeams();
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.teamsStore.singleTeam);
  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      if (teamId) {
        const selectedTeam = await getTeam(teamId);
        dispatch(loadSingleTeamActionCreator(selectedTeam as TeamsStructure));
      }
    })();
  }, [dispatch, getTeam, teamId]);

  return (
    <DetailPageStyled>
      <h1 className="detail__title">{team.name}</h1>
      <img className="detail__image" src={team.image} alt="Background team" />
      <p className="detail__description">{team.description}</p>
      <div className="detail__skills">
        <span className="detail__type">{team.type}</span>
        <span className="detail__rating">{team.rating}</span>
      </div>
      <ul className="detail__characters">
        <li className="detail__character">
          <img
            src={`/images/characters/${team.character1}.webp`}
            alt={team.character1}
          />
          <h2 className="detail__name">{team.character1}</h2>
        </li>
        <li className="detail__character">
          <img
            src={`/images/characters/${team.character2}.webp`}
            alt={team.character2}
          />
          <h2 className="detail__name">{team.character2}</h2>
        </li>
        <li className="detail__character">
          <img
            src={`/images/characters/${team.character3}.webp`}
            alt={team.character3}
          />
          <h2 className="detail__name">{team.character3}</h2>
        </li>
        <li className="detail__character">
          <img
            src={`/images/characters/${team.character1}.webp`}
            alt={team.character4}
          />
          <h2 className="detail__name">{team.character4}</h2>
        </li>
      </ul>
    </DetailPageStyled>
  );
};

export default DetailPage;
