import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

export default function Inicio() {
  return (
    <div id='conteudo'>
        <div id='borda'>
          <img id='lupa' src={"imagens/lupa.jpg"} alt="lupa" />
          <br/>
          <p id='qualquiz'>Você sabe tudo sobre marcas?</p>
          <br/>
          <Link id='boton' to="/comecar"><button id='comecar'>COMECAR</button></Link>
        </div>
    </div>
  )
}
