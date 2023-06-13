import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border-radius: 0 0 20px 20px;
  width: 280px;
  min-height: 290px;
  top: 0;
  z-index: 10;
  padding: 35px;
  color: white;
  gap: 30px;
  background: linear-gradient(180deg, #00000085 0%, rgba(0, 0, 0, 0) 18.74%),
    rgba(20, 25, 43, 0.75);
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.3);
  animation: swing-in-top-fwd 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  .modal {
    &__icon {
      width: 50px;
      height: 50px;
    }

    &__message {
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
    &__button {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  .modal__icon__error {
    background-image: url("../images/icons/error.svg");
  }

  &.modal__error {
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 20px 20px;
    border-bottom: rgb(172, 91, 91) solid 3px;
  }

  .modal__icon__ok {
    background-image: url("../images/icons/ok.svg");
  }

  &.modal__ok {
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 20px 20px;
    border-bottom: #61935b solid 3px;
  }

  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }

  .modal__container {
    display: grid;
    place-items: center;
  }
`;

export default ModalStyled;
