import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import Tetris from './Pages/Tetris';

const App = ({ playerInfo }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tetris" element={<Tetris playerInfo={playerInfo} />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
