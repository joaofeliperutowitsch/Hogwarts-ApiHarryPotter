import React from "react";
import hogwarts from "../img/hogwarts.webp";

import * as S from "../styled/StyledSobre";
import { GlobalStyle } from "../styled/StyledSobre";

const Sobre = () => {
  return (
    <>
      <GlobalStyle />
      <S.containerSobre>
        <h2>Sobre Hogwarts</h2>
        <p>
          A Escola de Magia e Bruxaria de Hogwarts, ou simplesmente Hogwarts, é
          um internato fictício de magia para feiticeiros e feiticeiras com
          idades entre os onze e dezessete anos.Fundada a 100 Anos a.C, a Escola
          De Magia & Bruxaria Vem Formando muitos Bruxos. Alunos Escolhidos Para
          Estudar em Hogwarts Recebem uma Carta Mágica convidando Para Entrar Na
          Escola, o Bruxo Vem Para Escola Num Expresso que Sai As 12:00.Chegando
          na Escola o bruxo Tem Que Passar Por um Processo Para ver para Qual
          Das 4 Casas ele Vai São elas : Grifinória,Sonserina,Corvinal e
          Lufa-Lufa.Este Processo e feito Por Um chapéu Chamado no Mundo dos
          Bruxos Por (Chapéu Seletor). O Aluno Deve Respeitar as Regras, Os
          professores, Prestar Atenção nas Matérias e Não usar Magia na Frente
          De TROUXAS (pessoas que não são bruxos).
        </p>
        <h3>Inauguração 1/09/2013</h3>
        <img src={hogwarts} alt="" />
      </S.containerSobre>
    </>
  );
};
export default Sobre;
