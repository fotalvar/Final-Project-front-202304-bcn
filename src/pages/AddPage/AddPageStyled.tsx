import styled from "styled-components";

const AddPageStyled = styled.main`
  margin-top: 120px;
  width: 280px;

  .add-team {
    &__title {
      text-align: center;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default AddPageStyled;
