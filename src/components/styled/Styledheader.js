import styled from "styled-components";
import { Link } from "react-router-dom";
import fundoheader from "../img/fundoheader.jpg";

export const topHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${fundoheader});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    color: white;
  }

  img {
    width: 10vw;
  }

  nav {
    width: 50%;
  }

  ul {
    display: flex;
    flex-direction: c;
    color: wheat;
    justify-content: space-evenly;
    list-style: none;
  }

  li {
    font-family: "DM Sans", sans-serif;
    color: #373737;
    margin-left: 2vw;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
