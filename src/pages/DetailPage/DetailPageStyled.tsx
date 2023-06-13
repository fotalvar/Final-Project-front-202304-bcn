import styled from "styled-components";

const DetailPageStyled = styled.main`
  margin-top: 120px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${(props) => props.theme.animation.page};
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .detail {
    &__title {
      text-align: center;
      color: ${(props) => props.theme.colors.secondary};
    }

    &__image {
      width: 280px;
      height: 170px;
      filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
      border-radius: 10px;
    }

    &__description {
      color: ${(props) => props.theme.colors.mainLight};
      text-align: justify;
    }

    &__skills {
      display: flex;
      text-align: center;
      gap: 10px;
    }

    &__type {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 6px;
      width: 65%;
      color: white;
    }

    &__rating {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 6px;
      width: 35%;
      color: white;
    }

    &__characters {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      height: 100%;
      gap: 0px 30px;
    }

    &__character {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__name {
      color: white;
      padding: 10px;
      font-size: 20px;
    }
  }
`;

export default DetailPageStyled;
