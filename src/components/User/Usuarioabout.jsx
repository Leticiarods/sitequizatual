import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import "./imagens/icone.png";
import "./imagens/iconereduzido.png";
import "./User.css";
import { Link, redirect } from "react-router-dom";


export default function User() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [operacao, setOperacao] = useState("");

  /////////////////////////////////////////// ACESSA API /////////////////////////////////////////////////////////////////////
  const url = "https://meu-quiz.vercel.app/usuarios/";
  useEffect(() => {
    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setUsuarios(respJson))
      .catch((err) => console.log(err));
  }, [url]);

  /////////////////////////////////////////// FUNÇÕES PARA BOTÕES /////////////////////////////////////////////////////////////////////
  //CRIA NOVOS USUARIOS -- NOVO USUARIO
  function novosDados() {
    setOperacao("criarRegistro");
  }
  //LIMPA CAIXA QUE ESTA COM OS DADOS DIGITADOS-- LIMPAR
  function limparDados() {
    setId("");
    setNome("");
    setOperacao("");
  }
  //COLOCA OS DADOS DE UM USUARIO NAS CAIXAS -- PINCEL
  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome } = usuario;
    setOperacao("editarRegistro");
    setId(id);
    setNome(nome);
  }
  //ALTERA OS DADOS DE UM USUARIO EXISTENTE -- SALVAR
  function atualizaListaUsuarioEditado(response) {
    console.log(response);
    let { id } = response.data;
    const index = usuarios.findIndex(item => item.id == id);
    let users = usuarios;
    users[index].nome = nome;
    setUsuarios(users);
    limparDados("");
  }
  //ACRESCENTA UM NOVO USUARIO -- SALVAR
  function atualizaListaComNovoUsuario(response) {
    console.log(response);
    let { id, nome } = response.data;
    let obj = { "id": id, "nome": nome };
    let users = usuarios;
    users.push(obj);
    setUsuarios(users);
    limparDados("");
  }
  //APAGA  UM USUARIO DA LISTA -- LIXEIRA
  function apagarDados(cod) {
    const confirmacao = window.confirm('Deseja apagar este usuário? Clique em "OK" se sua resposta for sim!');
    if (confirmacao) {
      axios.delete(url + cod)
        .then(() => setUsuarios(usuarios.filter(item => item.id !== cod)))
        .catch((erro) => console.log(erro));
    }
  }
  //BOTAO QUE SALVA QUALQUER ALTERAÇÃO OU ACRESCIMO -- SALVAR
  function gravarDados() {
    if (nome !== " ") { //valida se nome esta vazio ou não para poder salvar
      if (operacao === "criarRegistro") {
        axios.post(url, {
          nome: nome,
        })
        .then((response) => {
          const novoUsuarioId = response.data.id;
          atualizaListaComNovoUsuario(response);
          redirecionaAba(novoUsuarioId);
        })
        .catch((err) => console.log(err));
      } else if (operacao === "editarRegistro") {
        axios.put(url + id, {
          nome: nome,
        })
        .then((response) => {
          atualizaListaComNovoUsuario(response);
          redirecionaAba(id);
        })
        .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
      const confirmacao = window.confirm('Preencha os campos.');
    }
  }

  //REDIRECIONA PARA O QUIZ COM PERGUNTAS
  function redirecionaAba(usuarioId) {
    const novaAba = window.open('http://localhost:3000/Quiz?id=' + usuarioId, '_blank');
    if (novaAba) {
      novaAba.focus();
    } else {
      console.log('O bloqueio de pop-ups pode ter impedido a abertura da nova aba.');
    }
  }

//////////////////////////////////////////////// INTERFACE /////////////////////////////////////////////////////////////////
/////////////////////////////////////////// LOGIN ADMINISTRADOR ////////////////////////////////////////////////////////////
return (
  /*////////////////////////////////////// DESIGN NO USER.CSS /////////////////////////////////////////////////*/
  <div id="pont">
    <div id="botoes">
      {/*/////////////////////// BOTAO DE CADASTRAR UM NOVO USUARIO //////////////////////////////////////*/}
      <button id="novouser" type="button" onClick={novosDados}>Novo Usuario</button>

      {/*//////////////////////// CAIXA DE TEXTO PARA COLOCAR NOME  //////////////////////////////////////*/}
      <input id="insira" type="text" name="txtNome" value={nome} onChange={(e) => { setNome(e.target.value); }} placeholder="Digite seu nome"/>
      
      {/*//////////////////////// BOTAO LIMPAR CAIXA DE TEXTO DE NOME /////////////////////////////////////
      <div id="lixeira"><FaTrashCan onClick={() => limparDados()}></FaTrashCan></div> */}

      {/*////////////////////// BOTAO DE CANCELAR E LIMPAR CAIXA DE TEXTO DE NOME ///////////////////////////*/}
      <button id="limpar" type="button" onClick={limparDados}>Cancelar</button> 

      {/*////////////////////////////// BOTAO DE SALVAR ALTERAÇÕES  /////////////////////////////////////////*/} 
      <button id="salvar" type="button" onClick={gravarDados}>Salvar</button>
    </div>
      {/*/////////////////////////////// LISTA DOS USUARIOS DA API ///////////////////////////////////////////*/}
      <div id="dados">
        {usuarios ? usuarios.map((item) => { return (
          <div id="nomes" key={item.id}>
                {item.id} - {item.nome} {" "}
                
                {/*///////////////////////////// PINCEL /////////////////////////////////////////////////////*/}
                <FaPencil id="lapis" onClick={() => editarDados(item.id)} />
                {/*//////////////////////////// LIXEIRA /////////////////////////////////////////////////////*/}
                <FaTrashCan id="delete" onClick={() => apagarDados(item.id)} />
            </div>
        );
      })
      : false}
      </div>
  </div>
);
}