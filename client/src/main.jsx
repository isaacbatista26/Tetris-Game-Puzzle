import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App playerInfo={
    {
    nickname : "Fulano",
    score : 100,
    nivel : 2,
    email : "fulano@aluno.unb.br"
    }
  }/>,
  document.getElementById('root')
);

