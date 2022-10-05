import React from "react";

import * as S from "../styled/StyledProjeto";
import { GlobalStyle } from "../styled/StyledProjeto";

const Projeto = () => {
  return (
    <S.containerProjeto>
      <GlobalStyle />
      <h2>Sobre O Projeto</h2>
      <p>
        A ideia do projeto é mostrar aos consumidores do site um pouco do que é
        ser aluno de Hogwarts, o que você pode aprender na escola e em qual casa
        você pode ficar durante o processo escolar. Hogwarts é um internato para
        bruxos com idades entre onze e dezessete anos. Fundada 100 anos a.C. a
        Escola de Magia e Bruxaria vem treinando muitos bruxos, e agora pela
        internet.
      </p>
      <p>
        Na criação do site usei styled -components para fazer a estilização,
        Axios para consumir a API, na organização das rotas usei
        react-router-dom e também usei os hooks com useState e UseEffect.
      </p>
    </S.containerProjeto>
  );
};
export default Projeto;
