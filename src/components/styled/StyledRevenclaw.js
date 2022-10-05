import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  background-color: #253e4c;
}
`;

export const containerRavenclaw = styled.section`
  h2 {
    margin-top: 4vh;
    align-items: center;
    text-align: center;
  }
`;

export const divRavenclaw = styled.section`
  margin-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  div {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0d94c;
    border-radius: 6%;
    width: 20vw;

    @media (max-width: 720px) {
      width: 30;
    }
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 6%;
  }

  p {
    text-align: center;
  }
`;
