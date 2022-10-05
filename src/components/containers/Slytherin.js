import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "../styled/StyledSlytherin.js";
import { GlobalStyle } from "../styled/StyledSlytherin";

const Slytherin = () => {
  const [sonserina, setSonserina] = useState([]);
  const Api = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(Api)
      .then((res) => setSonserina(res.data))
      .catch((erro) => console.log(`Erro na solicitação ${erro}`));
  }, [sonserina]);
  return (
    <S.containersonserina>
      <GlobalStyle />
      <h2>seus amigos na Sonserina</h2>
      <S.divsonserina>
        {sonserina
          .slice(0, 60)
          .filter((item) => item.house === "Slytherin")
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
      </S.divsonserina>
    </S.containersonserina>
  );
};
export default Slytherin;
