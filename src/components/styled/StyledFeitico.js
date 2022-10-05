import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  background-color: #253e4c;
}
`;

export const containerFeitico = styled.section`
  text-align: center;
  background-color: #253e4c;
`;

export const texoFeitico = styled.h2`
  display: flex;
  background-color: #253e4c;
  flex-wrap: wrap;
  align-items: baseline;
  border: solid;
  text-align: center;
  background-color: #50381a;

  h2 {
    width: 50%;

    &:hover {
      color: #f0d94c;
      cursor: pointer;
    }
  }

  p {
    width: 50%;
    margin-top: 5vh;
    &:hover {
      color: #f0d94c;
      cursor: pointer;
    }
  }
`;
