import React from "react";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  return (
    <DetailPageStyled>
      <h1 className="detail__title">Sumeru</h1>
      <img
        className="detail__image"
        src="https://i.ibb.co/Wp1zR9S/Sumeru.webp"
        alt="Sumeru Team"
      />
      <p className="detail__description">
        A team full of pyro characters. Perfect for elemental synergy and
        continuous pyro attack
      </p>
      <div className="detail__skills">
        <span className="detail__type">Explorer</span>
        <span className="detail__rating">SS+</span>
      </div>
      <ul className="detail__characters">
        <li className="detail__character">
          <img src={`/images/characters/Mika.webp`} alt="Mika" />
          <h2 className="detail__name">Mika</h2>
        </li>
        <li className="detail__character">
          <img src={`/images/characters/Venti.webp`} alt="Venti" />
          <h2 className="detail__name">Venti</h2>
        </li>
        <li className="detail__character">
          <img src={`/images/characters/Kokomi.webp`} alt="Kokomi" />
          <h2 className="detail__name">Kokomi</h2>
        </li>
        <li className="detail__character">
          <img src="/images/characters/Diluc.webp" alt="Diluc" />
          <h2 className="detail__name">Diluc</h2>
        </li>
      </ul>
    </DetailPageStyled>
  );
};

export default DetailPage;
