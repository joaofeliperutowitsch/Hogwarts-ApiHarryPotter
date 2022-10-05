import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  color: white;
  background-color: #253e4c;
}
`;

export const containerProjeto = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  margin-top: 3vh;
  align-items: center;

  div {
    margin-top: 2vh;
  }

  img {
    width: 10%;
  }

  p {
    width: 35%;
    text-align: center;
    margin-top: 2vh;
  }
`;
