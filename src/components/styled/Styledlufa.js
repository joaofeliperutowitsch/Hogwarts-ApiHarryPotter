import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  background-color: #c4ac25;
}
`;

export const containerlufalufa = styled.section`
  h2 {
    margin-top: 4vh;
    align-items: center;
    text-align: center;
  }
`;

export const divlufalufa = styled.section`
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
  }

  img {
    width: 250px;
    height: 300px;
    border-radius: 6%;
  }

  p {
    text-align: center;
  }
`;

export const fundosobrelufa = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0d94c;
    border-radius: 6%;
  }

  img {
    width: 250px;
    height: 300px;
    border-radius: 6%;
  }

  p {
    text-align: center;
  }
`;
