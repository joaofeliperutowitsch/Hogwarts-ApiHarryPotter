import React from "react";

import * as S from "../styled/StyledHorarios";
import { GlobalStyle } from "../styled/StyledHorarios";

const Horarios = () => {
  return (
    <>
      <GlobalStyle />
      <S.Horarios>
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
    </>
  );
};
export default Horarios;
