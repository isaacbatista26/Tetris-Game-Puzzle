import React from 'react';
//import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Register from './Components/LoginPage/LoginSignup/Register.jsx';
import Tetris from './Pages/Tetris';

const App = ({ playerInfo }) => {
  return (
    /*
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Tetris playerInfo={playerInfo} />} />
    </Routes>
    </BrowserRouter>
    */
   /*<Tetris playerInfo={playerInfo}/>*/
   <Register />
  );
};

export default App;
