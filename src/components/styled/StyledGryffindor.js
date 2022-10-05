import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  background-color: #90171c;
}
`;

export const containergrinfinoria = styled.section`
  h2 {
    margin-top: 4vh;
    align-items: center;
    text-align: center;
  }
`;

export const divgrifinoria = styled.section`
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
