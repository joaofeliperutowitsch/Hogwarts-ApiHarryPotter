import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

body{
  
}
`;

export const Footer = styled.div`
  background-color: #50381a;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  margin-top: 10vh;

  img {
    width: 20vw;
  }
`;

export const ContainerFooter = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 100%;

  ul {
    list-style: none;
  }

  div {
  }

  h4 {
    font-size: 1.3rem;
    color: black;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 800;
    position: relative;
  }

  h4:hover {
    color: #f0d94c;
  }

  li {
    text-transform: capitalize;
    color: white;
    margin-top: 10px;
    font-weight: 600;
    display: block;
  }
`;

export const footerLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const FooterA = styled.a`
  text-decoration: none;
  color: white;
`;
