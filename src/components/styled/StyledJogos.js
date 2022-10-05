import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  color: white;
  background-color: #253e4c;
}
`;

export const containerJogos = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  margin-top: 3vh;

  div {
    margin-top: 2vh;
  }

  h3 {
    margin-top: 2vh;
  }

  p {
    margin-top: 2vh;
  }

  img {
    width: 50%;
    height: 50%;
  }
`;
