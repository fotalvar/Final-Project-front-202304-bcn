import styled from "styled-components";

const ListPageStyled = styled.main`
  margin-top: 120px;
  animation: ${(props) => props.theme.animation.page};
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .teamsList {
    &__title {
      text-align: center;
      color: ${(props) => props.theme.colors.secondary};

      &:first-letter {
        text-transform: capitalize;
      }
    }

    &__rankList {
      width: 180px;
      height: 48px;
      padding: 15px;
      background: ${(props) => props.theme.colors.mainLight};
      box-shadow: 0px 6px 6px #0000003f;
      border-radius: 50px;
      appearance: none;
      background-image: url("../images/icons/down-arrow.svg");
      background-repeat: no-repeat;
      background-position: right 0.7rem top 50%;
      background-size: 0.65rem auto;
      font-family: inherit;
    }

    &__addButton {
      width: 80px;
      height: 48px;
      border: none;
      background: ${(props) => props.theme.colors.secondary};
      box-shadow: 0px 6px 6px #0000003f;
      border-radius: 45px;
      font-size: ${(props) => props.theme.fontSizes.big};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__filter {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      gap: 20px;
      padding: 20px;
      top: 105px;
      z-index: 2;
      position: sticky;
      backdrop-filter: blur(8px);
      border-bottom: solid #fdfdfd1a 2px;
    }
  }

  @keyframes fade-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
export default ListPageStyled;
