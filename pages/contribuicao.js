import React from 'react';
import Header from '../src/components/Header';
import styled from 'styled-components';
import InstitutionalFooter from '../src/components/Footer/institutionalFooter';
import Image from 'next/image';

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
    text-indent: 1em;
    visibility: visible;
  }
  .contribuaBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto 0;
  }
  .qrBox {
    margin-left: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    overflow: hidden;
  }
`;

function Contribution(props) {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <h2>Contribuição</h2>
            <h4 className="textWork">Contribua com o Evangelho Simples:</h4>
            <div className="contribuaBox">
              <div>
                <h5>Evangelho Simples LTDA</h5>
                <h5>Agência: 254</h5>
                <h5>C/C: 05222-56</h5>
                <h5>CNPJ: 222.765.908/0001-45</h5>
              </div>
              <div className="qrBox">
                <Image
                  width={300}
                  height={300}
                  src={'/images/qrcodeexample.png'}
                  alt="qrcode"
                />
              </div>
            </div>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Contribution;
