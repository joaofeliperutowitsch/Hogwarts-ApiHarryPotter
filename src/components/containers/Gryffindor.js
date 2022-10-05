import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "../styled/StyledGryffindor.js";
import { GlobalStyle } from "../styled/StyledGryffindor";

const Gryffindor = () => {
  const [griffinoria, setGriffinoria] = useState([]);
  const Api = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(Api)
      .then((res) => setGriffinoria(res.data))
      .catch((erro) => console.log(`Erro na solicitação ${erro}`));
  }, [griffinoria]);

  return (
    <S.containergrinfinoria>
      <GlobalStyle />
      <h2>seus amigos na Grifinória</h2>
      <S.divgrifinoria>
        {griffinoria
          .slice(0, 25)
          .filter((item) => item.house === "Gryffindor")
          .map((item) => (
            <div>
              {item.image && <img src={item.image} alt={item.name} />}
              <p>Nome: {item.name}</p>
              {(item.patronus && <p>Patrono: {item.patronus}</p>) ||
                (!item.patronus && <p>Patrono: Não indentificado</p>)}
              {(item.dateOfBirth && (
                <p>Data Nascimento: {item.dateOfBirth}</p>
              )) ||
                (!item.dateOfBirth && (
                  <p>Data Nascimento: Não indentificado</p>
                ))}
            </div>
          ))}
      </S.divgrifinoria>
    </S.containergrinfinoria>
  );
};
export default Gryffindor;
