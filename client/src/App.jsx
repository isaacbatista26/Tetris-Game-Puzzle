import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Register from './Components/LoginPage/LoginSignup/Register.jsx';
import Login from './Components/LoginPage/LoginSignup/Login.jsx';
import Tetris from './Pages/Tetris';


const App = ({ playerInfo }) => {
  return (
    <BrowserRouter>
      <Routes>
        < Tetris/>
        <Route path="/" element={<Tetris playerInfo={playerInfo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;