import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
  align-items: center;

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: ${(props) => props.theme.colors.mainLight};
      gap: 25px;
      text-align: center;
    }
    &__description,
    &__character,
    &__name,
    &__input {
      background: #f6f6f6;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      padding: 15px;
      min-width: 280px;
      max-width: 280px;
      font-family: inherit;
    }

    &__description {
    }

    &__button {
      background-color: ${(props) => props.theme.colors.secondary};
      margin: 15px 0 35px 0;
    }
  }
`;

export default FormStyled;
