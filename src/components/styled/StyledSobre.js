import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  color: white;
  background-color: #253e4c;
}
`;

export const containerSobre = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #253e4c;

  img {
    height: 80vh;
  }

  p {
    text-align: center;
    margin-top: 2vh;
  }

  h2 {
    margin-top: 4vh;
    text-align: center;
  }

  h3 {
    margin-left: 30px;
  }
`;
