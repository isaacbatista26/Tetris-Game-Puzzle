import React from 'react';
//import { BrowserRouter , Route, Routes } from 'react-router-dom'
import LoginSingup from './Components/LoginPage/LoginSignup/LoginSignup.jsx';
/*import Tetris from './Pages/Tetris';*/

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
   <LoginSingup/>
  );
};

export default App;
