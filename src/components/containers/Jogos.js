import React from "react";

import * as S from "../styled/StyledJogos";
import { GlobalStyle } from "../styled/StyledJogos";

import Campo from "../img/campo-harrypotter.jpg";

const Jogo = () => {
  return (
    <>
      <GlobalStyle />
      <S.containerJogos>
        <h2>Quadribol</h2>
        <div>
          <h3>Campo:</h3>
          <p>
            O campo onde o jogo ocorre tem formato oval, com 152 metros de
            comprimento por 55 de largura e uma área circular de aproximadamente
            60 centímetros de diâmetro ao centro, de onde as bolas são lançadas.
            O campo ainda possui, de cada lado, duas "pequenas áreas" onde se
            encontram três balizas ou aros, cada uma com 15 metros de altura, em
            frente às quais se posiciona o goleiro (keeper) para defender os
            aros da goles, lançada pelos artilheiros (chasers) da outra equipe.
          </p>
          <h3>Habbo Campo De Quadribol:</h3>
          <img src={Campo} alt="" />
          <h3>Bolas:</h3>
          <p>
            O quadribol possui três diferentes tipos de bolas: uma goles
            (quaffle), dois balaços (bludgers) e um pomo de ouro (golden
            snitch).
          </p>
          <h3>Balaços:</h3>
          <p>
            Os primeiros balaços (bludgers) eram pedras voadoras, e na época de
            Mumps, tinham sido meramente desbastadas para assumirem uma forma
            arredondada. Apresentavam, porém, uma importante desvantagem: podiam
            ser quebradas pelas maças magicamente reforçadas dos rebatedores do
            século XV, caso em que todos os jogadores passavam a ser perseguidos
            pelos fragmentos da pedra até o resto da partida.
          </p>
          <p>
            Provavelmente, deve ter sido essa a razão pela qual algumas equipes
            de quadribol começarem a experimentar balaços de metal no início do
            século XVI. Ágata Chubb, especialista em artefatos mágicos antigos,
            já identificou nada menos que doze balaços de chumbo desse período,
            encontrados tanto em turfeiras irlandesas quanto em brejos ingleses.
            "São, sem a menor dúvida, balaços e não balas de canhão", escreve
            ela.
          </p>
          <p>
            Com o tempo, os feiticeiros descobriram que o chumbo era
            demasiadamente macio para a fabricação de balaços (qualquer mocada
            deixada nele afectava a sua capacidade de voar em linha recta).
            Actualmente, eles são feitos de ferro e têm vinte e cinco
            centímetros de diâmetro. Os balaços são enfeitiçados para perseguir
            os jogadores sem discriminá-los. Se for permitido que ajam
            livremente, eles atacarão o jogador mais próximo, sendo a tarefa do
            batedor manter os balaços o mais longe possível da sua própria
            equipe e mandar o balaço na equipe adversária.
          </p>
          <h3>Goles:</h3>
          <p>
            A goles (quaffle) é usada pelos artilheiros para marcar gols num dos
            três arcos. Cada gol corresponde a dez pontos.
          </p>
          <p>
            Era inicialmente uma bola de couro pesado e não se aproximava em
            nada do formato redondo de hoje. Mais tarde ganhou um formato
            redondo e sem saliências, sendo equipada com uma alça de couro para
            facilitar seu controle. Séculos depois, a goles ganhou três
            cavidades e pintura castanha. Eventualmente foram adicionados um
            feitiço de levitação, para evitar que ela caísse muito rápido, e um
            feitiço de aderência para facilitar o seu controle; a sua cor foi
            mudada de castanho para vermelho, para facilitar a sua localização
            caso caia num chão lamacento ou de terra. Actualmente, a goles tem
            40,5 centímetros de diâmetro.
          </p>
          <h3>Pomo De Ouro (Ou Pingo De Ouro):</h3>
          <p>
            O pomo de ouro ou snitch dourada (golden snitch) é, como o nome
            indica, uma bola dourada. É minúscula (cabe na palma de uma mão) e
            se move aleatoriamente pelo estádio com suas pequenas asas
            extremamente velozes. O pomo de ouro costuma decidir jogos, pois o
            seu apanhamento delimita o fim de uma partida. Cada time possui um
            apanhador que tem de ficar sobrevoando o campo até encontrá-lo. A
            equipe que o captura ganha 150 pontos; não necessariamente, todavia,
            a equipe que apanha o pomo é a vencedora: caso a outra equipe tenha
            feito um placar que, mesmo após a captura do pomo, seja superior,
            será essa a vencedora.
          </p>
          <p>
            Credita-se a sua invenção a Bowman Wright, um competentíssimo
            encantador de metais. Foi inventado para substituir o uso do pomorim
            dourado (animal mágico muito rápido), que era solto no início do
            jogo para ser capturado.
          </p>
          <p>
            A pomo de ouro tem uma memória carnal, ou seja, ela reconhece a
            primeira pessoa que tocou nela para impedir que haja dúvidas sobre
            qual apanhador a agarrou. O ferreiro que a forja usa luvas e até à
            hora de ser libertada no jogo, não é tocada por nenhuma mão humana.
          </p>
          <h3>Apanhador:</h3>
          <p>
            A função do apanhador (seeker) é capturar o pomo de ouro. Em cada
            time de quadribol existe um apanhador, se ele for atingido por um
            balaço, não pode ser substituído. Os apanhadores, devem se
            movimentar por todo o campo para capturar o Pomo de Ouro, porém deve
            tomar cuidado com os balaços.
          </p>
          <h3>Artilheiro:</h3>
          <p>
            Os artilheiros (chasers) são os únicos, além do goleiro, autorizados
            a manter a posse da goles; sua função é marcar gols. Cada time
            possui três artilheiros. São sujeitos aos ataques dos balaços, por
            isso devem ter grande habilidade para se esquivar deles.Os
            Artilheiros, devem movimentar a goles pelo campo e tentar marcar
            pontos arremessando-a por entre os aros.
          </p>
          <h3>Batedor:</h3>
          <p>
            Há dois batedores (beaters) em cada time, equipados com um taco
            cada. O seu objetivo é afastar com bastonadas os balaços dos
            jogadores da sua equipa e colocá-los na rota dos adversários,
            similares a zagueiros. Protegem os apanhadores.Os Batedores, devem
            rebater os balaços com seus bastões , para dificultar a movimentação
            dos artilheiros e do apanhador do time adversário.
          </p>
          <p>
            Em geral são escolhidos rapazes para essa posição, por causa da
            força física necessária para manejar os tacos e rebater os balaços,
            mas garotas também podem ser batedoras.
          </p>
          <p>
            São jogadores que precisam de muita habilidade para voar e ter
            grande equilíbrio porque, às vezes, é preciso usar as duas mãos para
            rebater um balaço mais violento.
          </p>
          <h3>Goleiro:</h3>
          <p>
            O goleiro (keeper) é o jogador de quadribol encarregado de defender
            os três aros, evitando que os artilheiros, de posse da goles,
            marquem gols. No início do quadribol, os goleiros amarravam-se aos
            aros com uma corda, para não saírem de perto deles. Hoje, existe uma
            área que facilita o serviço.Os Goleiros, devem defender todos os
            arremessos lançados pelos artilheiros, defendendo os aros e passando
            a goles para os artilheiros de seu time.
          </p>
          <h3>OBS:O Jogo De Quadribol Aconteçera Aos Domingos 14:30.</h3>
          <h3>Testes Para Quadribol Sabado (08/12/2012).</h3>
        </div>
      </S.containerJogos>
    </>
  );
};
export default Jogo;
