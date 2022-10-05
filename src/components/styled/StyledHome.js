import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  background-color: #253e4c;
}
`;
export const containerhome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  img {
    width: 25vw;
    height: 28vh;
    margin-top: 10vh;
    animation: animate 4s linear infinite;
  }

  h2 {
    margin-top: 10vh;
  }

  @media (max-width: 720px) {
    img {
      height: 20vh;
    }
  }
`;

export const conatinercasa = styled.section`
  display: flex;
  justify-content: space-evenly;

  div {
    margin-left: 2vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 35px;
  }

  img {
    width: 20vw;
    height: 25vh;
  }
  @media (max-width: 720px) {
    img {
      height: 20vh;
    }
  }
`;

export const Horarios = styled.section`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  width: 90%;

  div {
    margin-top: 4vh;
  }

  h3 {
    margin-top: 20px;
  }

  h2 {
    text-align: center;
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

  @media (max-width: 820px) {
    h2 {
      text-align: start;
    }

    ul {
      width: 60%;
    }
  }
`;

export const tresHorarios = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const containersobre = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  p {
    margin-top: 20px;
  }

  h3 {
    margin-top: 20px;
  }

  img {
    width: 60vw;
    height: 60vh;
    flex-wrap: nowrap;
  }

  button {
    color: white;
    padding: 6px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
    font-size: 1.5rem;
    margin-top: 5vh;
    &:hover {
      background-color: green;
      cursor: pointer;
    }
  }
`;
