import React, { useState } from "react";

import imgGryffindor from "../img/Gryffindor.png";
import imgHufflepuff from "../img/Hufflepuff.png";
import imgRavenclaw from "../img/Ravenclaw.png";
import imgStyhering from "../img/Styyherin.png";
import imgChapeu from "../img/chapeu.png";
import imgfeitico from "../img/harry-potter-feitico.webp";
import hogwarts from "../img/hogwarts.webp";

import { Link } from "react-router-dom";
import * as S from "../styled/StyledHome";
import { GlobalStyle } from "../styled/StyledHome.js";

const Button = () => {
  const [number, setNumber] = useState(
    "click no chapeu para saber qual sera sua escola"
  );

  function randomNumber(menor, maior) {
    setNumber(Math.floor(Math.random() * (maior - menor) + menor));
  }
  return (
    <S.containerhome>
      <GlobalStyle />
      <h2>O Numero que cair sera sua casa</h2>
      <img
        src={imgChapeu}
        alt="imagem do chapeu"
        onClick={() => {
          randomNumber(1, 5);
        }}
      />
      <h2>entre na casa {number}</h2>
      <S.conatinercasa>
        <div>
          <Link to="/Gryffindor">
            <img src={imgGryffindor} alt="Imagem da casa Grifinória" />
          </Link>
          <h3>1</h3>
        </div>
        <div>
          <Link to="/Hufflepuff">
            <img src={imgHufflepuff} alt="Imagem da casa Lufa-Lufa" />
          </Link>
          <h3>2</h3>
        </div>
        <div>
          <Link to="/Ravenclaw">
            <img src={imgRavenclaw} alt="Imagem da casa Corvinal" />
          </Link>
          <h3>3</h3>
        </div>
        <div>
          <Link to="/Slytherin">
            <img src={imgStyhering} alt="Imagem da casa Sonserina" />
          </Link>
          <h3>4</h3>
        </div>
      </S.conatinercasa>
      <S.Horarios>
        <h2>Horários Das Aulas</h2>
        <S.tresHorarios>
          <div>
            <h2>Segunda-feira</h2>
            <ul>
              <li>17:00 Herbologia.</li>
              <li>17:45 Poçoes.</li>
              <li>18:00 Intervalo.</li>
              <li>18:30 Adivinhação.</li>
              <li>19:00 Astronomia.</li>
              <li>19:15 Estudo Dos Trouxas.</li>
              <li>19:45 Runas Antigas.</li>
              <li>20:00 Toque de Recolher.</li>
            </ul>
          </div>
          <div>
            <h2>Terça-feira</h2>
            <ul>
              <li>17:00 Poçoes.</li>
              <li>17:30 Vago.</li>
              <li>18:00 Intervalo.</li>
              <li>18:30 Duelos.</li>
              <li>19:00 Trato de Criaturas Magicas.</li>
              <li>19:30 Vago</li>
              <li>20:00 Toque de Recolher.</li>
            </ul>
          </div>
          <div>
            <h2>Quarta-Feira</h2>
            <ul>
              <li>17:00 Vôo.</li>
              <li>17:15 Astronomia.</li>
              <li>17:30 Tranfiguração.</li>
              <li>17:45 Feitiços.</li>
              <li>18:15 Intervalo</li>
              <li>18:30 Adivinhãçao.</li>
              <li>19:00 Vago.</li>
              <li>19:30 Aritimância.</li>
              <li>20:00 Toque de Recolher.</li>
            </ul>
          </div>
        </S.tresHorarios>
        <S.tresHorarios>
          <div>
            <h2>Quinta-feira</h2>
            <ul>
              <li>17:00 Poçoes.</li>
              <li>17:30 Poçoes.</li>
              <li>18:00 Intervalo.</li>
              <li>18:45 Adivinhação</li>
              <li>19:00 Vago</li>
              <li>19:30Historia da Magia.</li>
              <li>20:00 Toque de Recolher.</li>
            </ul>
          </div>
          <div>
            <h2>Sexta-feira</h2>
            <ul>
              <li>17:00 Hostoria da Magia.</li>
              <li>17:45 Vago.</li>
              <li>18:00 Intervalo.</li>
              <li>18:30 Adivinhação.</li>
              <li>18:50 Adivinhação.</li>
              <li>19:00 Vago.</li>
              <li>19:30 Runas Antigas.</li>
              <li>20:00 Toque de Recolher.</li>
            </ul>
          </div>
          <div>
            <h2>Sabádo</h2>
            <ul>
              <li>13:00 Adivinhação.</li>
              <li>13:45 Poçoes.</li>
              <li>14:00 Herbologia</li>
              <li>14:30 Herbologia</li>
              <li>15:00 Vago .</li>
              <li>15:45 Intervalo.</li>
              <li>16:30 Adivinhaçao.</li>
              <li>17:00 Trato De Criaturas Magicas.</li>
              <li>17:30 Vôo.</li>
              <li>18:00 Intervalo.</li>
              <li>18:45 Duelos.</li>
              <li>19:00 Feitiços.</li>
              <li>19:45 Astronomia.</li>
              <li>20:00 Aritimância.</li>
              <li>20:30 Estudos Dos Trouxas.</li>
              <li>21:00 Estudos Dos Trouxas.</li>
              <li>21:30 Toque de recolher.</li>
            </ul>
          </div>
        </S.tresHorarios>
        <h3>
          Domingo Não Havera aula Pois Vocês Podem Ir A Hogsmead. De Ropa Normal
          com cor da sua casa.(E Obrigatorio).
        </h3>
      </S.Horarios>
      <S.containersobre>
        <img src={hogwarts} alt="" />
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
      </S.containersobre>
      <S.containersobre>
        <img src={imgfeitico} alt="" />
        <h2>
          Aparte o botão para descobrir os feitiços que você pode aprender
        </h2>
        <Link to="/Feiticos">
          <button>Estudar</button>
        </Link>
      </S.containersobre>
    </S.containerhome>
  );
};

export default Button;
