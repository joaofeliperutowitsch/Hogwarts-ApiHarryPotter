import React, { useState, useEffect } from "react";
import axios from "axios";

import hanna from "../img/img-hannahabbout.webp";
import susana from "../img/img-SusanaBones.webp";

import * as S from "../styled/Styledlufa.js";
import { GlobalStyle } from "../styled/Styledlufa";

const Hufflepuff = () => {
  const [hufflepuff, setHufflepuff] = useState([]);
  const Api = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(Api)
      .then((res) => setHufflepuff(res.data))
      .catch((erro) => console.log(`Erro na solicitação ${erro}`));
  }, [hufflepuff]);

  return (
    <div>
      <S.containerlufalufa>
        <GlobalStyle />
        <h2>Seus amigos em Lufa-Lufa</h2>
        <S.divlufalufa>
          {hufflepuff
            .slice(0, 30)
            .filter((item) => item.house === "Hufflepuff")
            .map((item) => (
              <div>
                {item.image && <img src={item.image} alt={item.name} />}
                <p>Nome: {item.name}</p>
                {(item.patronus && <p>signo: {item.patronus}</p>) ||
                  (!item.patronus && <p>Patrono: Não indentificado</p>)}
                {(item.dateOfBirth && (
                  <p>Data Nascimento: {item.dateOfBirth}</p>
                )) ||
                  (!item.dateOfBirth && (
                    <p>Data Nascimento: Não indentificado</p>
                  ))}
              </div>
            ))}
        </S.divlufalufa>
      </S.containerlufalufa>
      <S.containerlufalufa>
        <S.fundosobrelufa>
          <img src={hanna} alt="" />
          <div>
            <p>Nome: Hannah Abbott</p>
            <p>Patrono: Não indentificado</p>
            <p>Data Nascimento: Não indentificado</p>
          </div>
        </S.fundosobrelufa>
        <S.fundosobrelufa>
          <img src={susana} alt="" />
          <div>
            <p>Nome: Susana Bones</p>
            <p>Patrono: Não indentificado</p>
            <p>Data Nascimento: Não indentificado</p>
          </div>
        </S.fundosobrelufa>
      </S.containerlufalufa>
    </div>
  );
};

export default Hufflepuff;
