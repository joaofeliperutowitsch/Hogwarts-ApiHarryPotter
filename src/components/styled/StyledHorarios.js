import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  color: white;
  background-color: #253e4c;
}
`;

export const Horarios = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;

  div {
    margin-top: 4vh;
  }

  h3 {
    margin-top: 2vh;
  }

  h2 {
    margin-bottom: 10px;
  }

  ul {
    color: black;
    background-color: #f0d94c;
    border-radius: 6%;
    list-style: none;
  }

  li {
    margin-left: 10px;
    margin-top: 8px;
  }

  @media (max-width: 720px) {
    ul {
      width: 60%;
    }
  }
`;

export const tresHorarios = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
