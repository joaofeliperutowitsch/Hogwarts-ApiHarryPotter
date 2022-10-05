import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "../styled/StyledRevenclaw.js";
import { GlobalStyle } from "../styled/StyledRevenclaw";

const Ravenclaw = () => {
  const [ravenclaw, setRavenclaw] = useState([]);
  const Api = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(Api)
      .then((res) => setRavenclaw(res.data))
      .catch((erro) => console.log(`Erro na solicitação ${erro}`));
  }, [ravenclaw]);
  return (
    <S.containerRavenclaw>
      <GlobalStyle />
      <h2>seus amigos na Corvina</h2>
      <S.divRavenclaw>
        {ravenclaw
          .slice(0, 25)
          .filter((item) => item.house === "Ravenclaw")
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
      </S.divRavenclaw>
    </S.containerRavenclaw>
  );
};
export default Ravenclaw;
