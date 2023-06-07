import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavMain = styled.nav`
  ul {
    list-style: none;
    text-align: right;
    white-space: nowrap;
    font-family: 'Anton', sans-serif;
  }
  li {
    font-size: clamp(2.5em, 0.6em + 3.5vw, 3.5em);
    margin-top: -20px;
    margin-bottom: -17px;
  }
  //animation main menu
  li:hover {
    font-size: clamp(2.7em, 0.6em + 3.8vw, 3.6em);

    transition: all 0.4s ease-in-out;
  }
  /* @media screen and (max-width: 768px) {
    li {
      font-size: clamp(1em, 7vw, 3em);
    }
    li:hover {
      font-size: clamp(1em, 8vw, 3.2em);
    }
  } */
  /* @media screen and (max-width: 480px) {
    li {
      font-size: clamp(1em, 10vw, 3em);
    }
    li:hover {
      font-size: clamp(1em, 11vw, 3.2em);
    }
  } */

  //reajustment in main menu for samll screens
  @media screen and (max-width: 425px) {
    ul {
      text-align: center;
    }
    li {
      padding-top: 0.1em;
      font-size: clamp(2.2em, 0.6em + 1em + 3.8vw, 3.5em);
    }
    li:hover {
      font-size: clamp(2.4em, 0.6em + 1em + 4vw, 3.5em);

      transition: all 0.3s ease-in-out;
    }
  }
`;

function MainNav(props) {
  return (
    <NavMain>
      <ul>
        <li>
          <Link
            target="_blank"
            href="https://www.youtube.com/@EvangelhoSimplesOficial/playlists"
          >
            <a
              target="blank"
              href="https://www.youtube.com/@EvangelhoSimplesOficial/playlists"
            >
              SÉRIES
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@EvangelhoSimplesOficial/podcasts">
            <a
              target="blank"
              href="https://www.youtube.com/@EvangelhoSimplesOficial/podcasts"
            >
              PODCASTS
            </a>
          </Link>
        </li>

        <li>
          <Link href="/institucional/nosso-sonho">
            <a href="#">NOSSO SONHO</a>
          </Link>
        </li>
        <li>
          <Link href="/institucional/localizacao">
            <a href="#">LOCALIZAÇÃO</a>
          </Link>
        </li>
        <li>
          <Link href="contato">
            <a href="#">CONTATO</a>
          </Link>
        </li>
      </ul>
    </NavMain>
  );
}

export default MainNav;
