import styled from "styled-components";

const AddPageStyled = styled.main`
  margin-top: 120px;
  width: 280px;
  animation: ${(props) => props.theme.animation.page};
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .add-team {
    &__title {
      text-align: center;
      color: ${(props) => props.theme.colors.secondary};
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

export default AddPageStyled;
