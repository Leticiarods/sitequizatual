import React, { useState, useEffect } from 'react';
import './Feedback.css';

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const fetchFeedbackData = async () => {
    try {
      const response = await fetch('https://meu-quiz.vercel.app/feedback_table'); // Substitua 'URL_DA_SUA_API' pela URL real da sua API
      const data = await response.json();
      setFeedbackData(data);
    } catch (error) {
      console.error('Erro ao buscar dados da tabela:', error);
    }
  };
  useEffect(() => { fetchFeedbackData(); }, []);
///////////////////////////////////////////////////////////////////////////////
  return (
    <div id='Feed'>
      <h2>Tabela de Feedback</h2>
      <table id='tanto'>
        <thead>
          <tr id='vixi'>
            <th id='linha'>Usuario ID</th>
            <th id='linha'>Nome</th>
            <th id='linha'>Quantidade de Acertos</th>
            <th id='linha'>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item) => (
            <tr key={item.usuario_id}>
              <td id='linha'>{item.usuario_id}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade_acertos}</td>
              <td>{item.feedback_texto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;