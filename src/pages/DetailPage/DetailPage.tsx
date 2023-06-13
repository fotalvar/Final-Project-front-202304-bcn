import React from "react";
import DetailPageStyled from "./DetailPageStyled";

// interface DetailProps {
//   team: TeamsStructure;
// }

// const DetailPage = ({
//   team: {
//     image,
//     name,
//     rating,
//     type,
//     character1,
//     character2,
//     character3,
//     character4,
//     description,
//   },
// }: DetailProps): React.ReactElement => {
//   return (
//     <DetailPageStyled>
//       <h1 className="detail__title">{name}</h1>
//       <img src={image} alt={name} />
//       <p>{description}</p>
//       <span>{type}</span>
//       <span>{rating}</span>
//       <ul>
//         <li>
//           <img src={`/images/characters/${character1}.webp`} alt={character1} />
//           <h2>{character1}</h2>
//         </li>
//         <li>
//           <img src={`/images/characters/${character2}.webp`} alt={character2} />
//           <h2>{character2}</h2>
//         </li>
//         <li>
//           <img src={`/images/characters/${character3}.webp`} alt={character3} />
//           <h2>{character3}</h2>
//         </li>
//         <li>
//           <img src={`/images/characters/${character4}.webp`} alt={character4} />
//           <h2>{character4}</h2>
//         </li>
//       </ul>
//     </DetailPageStyled>
//   );
// };

// export default DetailPage;

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
