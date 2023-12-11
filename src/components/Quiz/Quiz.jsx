import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Quiz.css";

/* 
Navigate = useNavigate;

/////////////////////////////////////////// ACESSA API /////////////////////////////////////////////////////////////////////
const url = "https://meu-quiz.vercel.app/respostas/";
useEffect(() => {
  fetch(url)
    .then((respFetch) => respFetch.json())
    .then((respJson) => setUsuarios(respJson))
    .catch((err) => console.log(err));
}, [url]); */

///////////////////////////////////////////////////////////////////////////////
function SeuComponente() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await axios.get('https://meu-quiz.vercel.app/perguntas/');
        setDados(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
      }
    };
    fetchData();}, []);
  
/* function gravarquiz(){
  
  }

  useNavigate(() => {gravarquiz}); */

///////////////////////////////////////////////////////////////////////////////
return (
<div id='td'>
    <div id='bye'>
      <img id='perg' src={"imagens/lupa.jpg"} alt="lupa" />
      {/* <img id='perg' src={"imagens/lupa.jpg"} alt="lupa" /> */}
      {dados.map((item) => (
      <div id="perguntas" key={item.id}>{<br></br>}{item.id}) {item.texto_da_pergunta}
      <br></br>
      <select id='codd'>
        <option value="">Selecione uma opção</option>
        <option value={item.opcao_a}>{item.opcao_a}</option>
        <option value={item.opcao_b}>{item.opcao_b}</option>
        <option value={item.opcao_c}>{item.opcao_c}</option>
      </select>
      </div>
      ))}
      <Link to={"/Feedback"}>
        <button id='finish' type="submit" /* onClick={gravarquiz} */>Enviar</button>
      </Link>    
    </div>
</div>
  );
}
export default SeuComponente;

