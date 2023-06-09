import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-family: "Inria Sans", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  background-color: ${(props) => props.theme.colors.primaryDark};
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button{
  cursor: pointer;
  font-family: inherit;
}

input{
  font-family: inherit;
}

.modal__container{
  display: grid;
  place-items: center;
}
`;

export default GlobalStyle;
