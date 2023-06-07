import React from 'react';
import Header from '../src/components/Header';
import styled from 'styled-components';
import InstitutionalFooter from '../src/components/Footer/institutionalFooter';
import Image from 'next/image';
import Link from 'next/link';

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
  .whatsBox {
    margin: 1rem auto 0;
    max-width: 300px;
    max-height: 300px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }
`;

function Contact(props) {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <h2>Contato</h2>
            <h4>Fale conosco pelo Whatsapp oficial do Evangelho Simples:</h4>
            <div className="whatsBox">
              <Link href="https://api.whatsapp.com/send?phone=5512992366230&text=Ol%C3%A1.%20Vim%20pelo%20site%20do%20Evangelho%20Simples.">
                <a
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=5512992366230&text=Ol%C3%A1.%20Vim%20pelo%20site%20do%20Evangelho%20Simples."
                >
                  <Image
                    width={300}
                    height={300}
                    src="/images/whatsapp.png"
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Contact;
