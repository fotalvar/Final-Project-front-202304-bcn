import styled from "styled-components";

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 20px;

  .teamCard {
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
      background: rgb(38 28 28 / 66%);
      border: 2px solid rgb(255 255 255 / 50%);
      backdrop-filter: blur(4px);
      border-radius: 0px 10px;
      width: 48px;
      height: 48px;
      right: 0px;
      z-index: 1;
      box-shadow: rgba(0, 0, 0, 0.44) -1px 5px 8px;
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
      color: white;
      text-shadow: -1px -1px 4px #000000;
    }

    &__info {
      display: flex;
      text-align: center;
      gap: 5px;
    }

    &__type {
      width: 224px;
      background: #ffffff;
    }

    &__rating {
      width: 51px;
      background: #f2c65d;
    }

    &__rating,
    &__type {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 10px 10px;
      height: 35px;
    }
  }
`;

export default ListStyled;
