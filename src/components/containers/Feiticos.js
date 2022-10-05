import React, { useEffect, useState } from "react";
import axios from "axios";

import * as S from "../styled/StyledFeitico.js";
import { GlobalStyle } from "../styled/StyledFeitico";

const Feiticos = () => {
  const [feitico, setFeitico] = useState([]);

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/spells")
      .then((res) => {
        setFeitico(res.data);
      })
      .catch((error) => {
        console.log("desculpe aconteceu um problema na requisição", error);
      });
  }, [feitico]);
  return (
    <S.containerFeitico>
      <GlobalStyle />
      <h2>livro de feitiços</h2>
      {feitico.map((item) => (
        <S.texoFeitico>
          <h2>Nome: {item.name}</h2>
          <p>Descrição: {item.description}</p>
        </S.texoFeitico>
      ))}
    </S.containerFeitico>
  );
};
export default Feiticos;
