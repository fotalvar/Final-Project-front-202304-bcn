import styled from "styled-components";

const CardStyled = styled.ul`
  .team-card {
    &__container {
      display: flex;
      position: relative;
      flex-direction: column;
      margin: 0 auto;
      width: 280px;
      height: 205px;
      border-radius: 10px;
      box-shadow: #00000070 0 8px 8px;
    }

    &__close {
      position: absolute;
      background: #1c262f66;
      border: 2px solid #ffffff8e;
      backdrop-filter: blur(4px);
      border-radius: 0px 10px;
      width: 48px;
      height: 48px;
      right: 0px;
      z-index: 1;
      box-shadow: #00000070 -1px 5px 8px;
    }

    &__card {
      border: none;
      padding: 0;
      position: relative;
      background: none;
      border: 2px solid #ffffff8e;
      border-radius: 10px 10px 0 0;
      border-bottom: none;
    }

    &__teamImage {
      object-fit: cover;
      width: 280px;
      height: 170px;
      border-radius: 10px 10px 0 0;
    }

    &__title {
      display: flex;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 64.95%);
      width: 100%;
      height: 50px;
      padding: 10px;
      color: ${(props) => props.theme.colors.mainLight};
      text-shadow: -1px -1px 4px #000000;
    }

    &__info {
      display: flex;
      text-align: center;
      gap: 5px;
    }

    &__type {
      width: 224px;
      background: ${(props) => props.theme.colors.mainLight};
    }

    &__rating {
      width: 51px;
      background: ${(props) => props.theme.colors.secondary};
    }

    &__rating,
    &__type {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 4px #0000003f;
      border-radius: 0px 0px 10px 10px;
      height: 35px;
    }
  }
`;

export default CardStyled;
