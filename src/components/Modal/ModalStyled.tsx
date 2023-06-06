import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #14192bbf;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 280px;
  min-height: 290px;
  top: 20vh;
  z-index: 10;
  padding: 35px;
  color: white;
  gap: 30px;
  box-shadow: 0px 26px 20px 5px #00000095;

  .modal {
    &__icon {
      width: 50px;
      height: 50px;
    }

    &__message {
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
    &__button {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  .modal__icon__error {
    background-image: url("../images/icons/error.svg");
  }

  &.modal__error {
    outline: 3px solid #ac5b5b;
    border: 3px solid #e3b6b6cb;
  }

  .modal__icon__ok {
    background-image: url("../images/icons/ok.svg");
  }

  &.modal__ok {
    outline: 3px solid #61935b;
    border: 3px solid #afeeb3c9;
  }
`;

export default ModalStyled;
