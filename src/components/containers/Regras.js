import React from "react";

import * as S from "../styled/StyledRegras";
import { GlobalStyle } from "../styled/StyledRegras";

const Regras = () => {
  return (
    <S.Regras>
      <GlobalStyle />
      <h2>Regras de Hogwarts</h2>
      <ol>
        <li>É terminantemente proibido o uso de Maldições Imperdoáveis.</li>
        <li>É proibida a entrada de alunos na Floresta proibida.</li>
        <li>
          É proibida a saida de alunos de dentro da escola em período de aula
          para qualquer local fora da escola por exemplo o Beco Diagonal,
          Hogsmead e o Magicoológico sem permissão ou acompanhamento de um
          professor ou monitor.
        </li>
        <li>Não é permitido o uso de magias nos corredores da escola.</li>
        <li>
          Não é permitida a entrada de alunos no Salão Comunal de alguma casa
          que não sejam a sua.
        </li>
        <li>
          É dever dos alunos assistir às aulas, e responder as tarefas
          correspondentes. Caso seja observado um descaso para com as aulas, o
          aluno poderá ter sua inscrição na Escola cancelada irá e passar a
          morar em Hogsmead.
        </li>
        <li>
          Também é dever do aluno se empenhar na disputa das casas, procurando
          participar das atividades existentes na Escola.
        </li>
        <li>
          Os duelos somente ocorreram com a presença de um
          professor,monitor,diretor de casa comunal ou o diretor da escola.
        </li>
        <li>
          Qualquer aluno ou outra pessoa que se passar por Professor, Diretor,
          membro do Ministério da Magia ou qualquer grupo que não seja o seu
          terá seu cadastro cancelado do site sem poder voltar a ser um membro.
        </li>
      </ol>
    </S.Regras>
  );
};
export default Regras;
