import React from "react";

import * as S from "../styled/StyledFooter";
import { GlobalStyle } from "../styled/StyledFooter";
import imgprofe from "../img/imgfooter.png";

const Footer = () => {
  return (
    <S.Footer>
      <GlobalStyle />
      <img src={imgprofe} alt="" />
      <S.ContainerFooter>
        <nav>
          <h4>obter ajuda</h4>

          <ul>
            <li>
              <S.footerLink to="/Sobre">Sobre</S.footerLink>
            </li>
            <li>
              <S.footerLink to="/Horarios">Horario das Aulas</S.footerLink>
            </li>
            <li>
              <S.footerLink to="/Jogos">jogo de quadribol</S.footerLink>
            </li>
          </ul>
        </nav>
        <nav>
          <h4>criador do site</h4>
          <ul>
            <li>
              <S.footerLink to="/Projeto">sobre o projeto</S.footerLink>
            </li>
            <li>
              <S.FooterA
                href="https://www.instagram.com/feliperutowitsch/"
                target="_blank"
              >
                Instagram
              </S.FooterA>
            </li>
            <li>
              <S.FooterA
                href="https://www.linkedin.com/in/feliperutowitsch/"
                target="_blank"
              >
                Linkedin
              </S.FooterA>
            </li>
          </ul>
        </nav>
      </S.ContainerFooter>
    </S.Footer>
  );
};

export default Footer;
