import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 2em;
  font-size: 12px;
  li{
    padding: 10px;
    text-align: center;
  }
  li:hover{
    text-decoration: underline;
    color: #4a4545;
    transition: 350ms;
    cursor: pointer;
  }


  @media (max-width: 952px) {
    flex-flow: column nowrap;
    background-color: rgba(26, 25, 25, 0.957);
    position: fixed;
    right: 0;
    top: 0;
    transform: ${({ open }) => open ? 'translateX(12%)' : 'translateX(135%)'};
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    

    li {
      color: #ffffff;
      font-family: 'Chivo', sans-serif;
      font-weight: 510;
      font-size: 0.9em;
      padding: 10% 0 0.25em 0;
      cursor: pointer;
    }
    li:hover{
      
      color: #888585;
      text-decoration: underline;
      transition: 300ms;
      
    }
    
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href='/institucional/filosofia'><a >FILOSOFIA DE MINISTÉRIO</a></Link>
      </li>
      <li>
        <Link href='/institucional/o-que-cremos'><a >O QUE CREMOS</a></Link>
      </li>

      {/* <li>
            <Link href='/institucional/pastores'><a>PASTORES</a></Link>
            </li>
            <li><Link href='/institucional/nossa-historia'><a>NOSSA HISTÓRIA</a></Link> </li>
        <li>
            <Link href='/institucional/ministerios'><a>MINISTÉRIOS</a></Link>
        </li> */}
      <li>
        <Link href='/institucional/nosso-sonho'><a>NOSSO SONHO</a></Link>
      </li>
      <li>
        <Link href='/institucional/localizacao'><a>LOCALIZAÇÃO</a></Link>
      </li>
      <li>
        <Link href='/contribuicao'><a >CONTRIBUIÇÃO</a></Link>
      </li>
    </Ul>
  )
}

export default RightNav
