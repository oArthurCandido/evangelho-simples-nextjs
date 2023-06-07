import React from 'react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import styled from 'styled-components';
import InstitutionalFooter from '../../src/components/Footer/institutionalFooter';

const Main = styled.div`
  .institutional {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contempt {
    max-height: fit-content;
    padding: 2em;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    max-width: 850px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
    height: fit-content;
    margin-top: 3em;
    margin-bottom: 3em;
  }
  h2 {
    padding-bottom: 1em;
  }
  .textWork {
    position: relative;
    /* text-indent: 1em; */
    visibility: visible;
  }
  .textWork > p {
    padding: 1rem 0;
  }
`;

function Dream(props) {
  return (
    <>
      <Header />
      <Main>
        <article className="institutional">
          <div className="contempt">
            <h2>Nosso Sonho</h2>
            <section className="textWork">
              <p>
                A igreja que queremos ser, não importa se é pequena ou grande,
                ela tem que ser simples.
                <br /> Simples não é boba... simples é objetiva, clara e eficaz
                naquilo que o dono da igreja quer... é a igreja que Jesus
                projetou.
                <br /> A igreja que queremos ser, tem gente... gente no sentido
                mais nobre da palavra &quot;fulano é gente&quot;... gente que
                ame nossos filhos e com quem nossos filhos possam contar se a
                gente vier a faltar.
              </p>
              <p>
                A igreja que queremos ser é a igreja que Jesus projetou!
                <br /> Igreja de gente comprometida;
                <br /> Igreja de gente que não larga o piano se a mão está
                doendo;
                <br /> Igreja de gente complicada que sabe que é complicada;
                <br /> Igreja de gente que ama mais as pessoas do que os
                processos e as regras frias;
                <br /> Igreja de gente que odeia ainda amar o pecado;
                <br /> Igreja de gente que para a conversa no meio pra orar.
                <br /> Igreja de gente exortável.
                <br /> A igreja que queremos ser é a igreja que Jesus projetou!
              </p>
              <p>
                Uma igreja que tem paciência com as imperfeições alheias,
                sabedoria para tratar as &quot;adolescências&quot; de todos,
                energia para incentivar uns aos outros a não desistir do único
                caminho possível, a cruz!
                <br /> Nesta igreja falaremos e ouviremos do quanto é legítimo
                sofrer e até morrer pela fé.
                <br /> É uma igreja que honra os seus pastores, mas também uma
                igreja em que os pastores não querem ser honrados.
                <br /> Aliás, uma igreja que é um amontoado de pastores… isso
                mesmo… gente que entendeu que o Evangelho é para cuidar e não
                apenas para ser cuidado! <br />
                Na igreja que queremos ser tem gente que faz o que precisa fazer
                sem disputar cargos ou reconhecimento humano. Que abre mão do
                próprio conforto para que o caráter de Jesus seja forjado no
                irmão.
                <br /> Uma igreja que ora. E que quando ora coloca o pedido do
                outro na frente do seu. Uma igreja simples.
                <br /> Uma igreja de gente que está mais preocupada com os
                próprios pecados e não com os pecados dos outros.... Uma igreja
                que não faz um ranking com os pecados mais pecados. E que não
                exclui o irmão porque ele ainda comete um pecado que nós já
                abandonamos. Porque se a gente for honesto, a gente ainda peca
                alguns pecados que outros já abandonaram e não queremos ser
                excluídos.
                <br /> Uma igreja que não acha um absurdo Jesus comer com
                pecadores, mas que tenta entender por que os pecadores se sentem
                à vontade para comer com Jesus.
                <br /> Uma igreja que chora com aqueles que estão sendo
                confrontados pelo Espírito Santo.
                <br /> Uma igreja que admoesta o insubordinado, consola o
                desanimado, ampara o fraco e é paciente com todos.
                <br /> Uma igreja que ama sem gostar. Uma igreja que serve sem
                querer. Uma igreja que morre por obediência.
                <br /> A igreja que queremos ser, tem gente que quando está
                insatisfeito não abandona o barco, mas se posiciona como agente
                de mudança. Isso mesmo! Gente que é a mudança que deseja.
                <br /> Uma igreja de gente que não se leva tão a sério! Uma
                igreja que descansa na certeza de que Cristo é quem a edifica,
                que o Espírito Santo é quem transforma, que a Palavra é viva e
                que as ovelhas ouvem a voz do Pastor.
              </p>
              <p>
                A igreja que queremos ser ainda não existe, precisa ser
                construída! E a missão é nossa! Afinal, se a gente diz que é
                crente, nós caminhamos por fé e não por vista!
              </p>
              <p>
                Assim como você, eu também posso ser igreja em outro lugar, com
                outras pessoas.... mas eu não quero! Então, deixa de frescura e
                vamos juntos nessa!
              </p>
              <p>
                Eu te convido a ser a melhor igreja... a mais colorida, a mais
                viva, a mais coerente que a gente conseguir ser.... e que o Rei
                seja glorificado através de nós!
              </p>
            </section>
          </div>
        </article>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Dream;
