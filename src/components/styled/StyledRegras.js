import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  color: white;
  background-color: #253e4c;
}
`;

export const Regras = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  li {
    margin-top: 20px;
  }
`;
