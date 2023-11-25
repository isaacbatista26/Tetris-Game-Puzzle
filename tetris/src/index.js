import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App playerInfo={
    {
    "nickname" : "fulano",
    "score" : 100,
    "email" : "fulano@aluno.unb.br"
    }
  }/>,
  document.getElementById('root')
);

