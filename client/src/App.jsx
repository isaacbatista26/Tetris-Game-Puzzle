import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Register from './Components/LoginPage/LoginSignup/Register.jsx';
import Login from './Components/LoginPage/LoginSignup/Login.jsx';
import Tetris from './Pages/Tetris';


const App = ({ playerInfo }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tetris" element={<Tetris playerInfo={playerInfo} />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
