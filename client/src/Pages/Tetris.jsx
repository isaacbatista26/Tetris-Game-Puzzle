import React from 'react';
// npm i react-router-dom

//Styled Components
import {StyledSection} from '../Components/TetrisGame/styles/StyledSection';
import {Main} from '../Components/TetrisGame/styles/Main';
import {LeftSide} from '../Components/TetrisGame/styles/LeftSide';
import {RightSide} from '../Components/TetrisGame/styles/RightSide';
import StyledIcon from '../Components/TetrisGame/styles/StyledIcon';

//Components
import Grid from '../Components/TetrisGame/Grid';
import PlayerInfo from '../Components/TetrisGame/PlayerInfo';
import GameInfo from '../Components/TetrisGame/GameInfo'
import NextTetromino from '../Components/TetrisGame/NextTetromino'

//Hooks
import useGridState from '../Hooks/useGridState';

const App = ({ playerInfo }) => {
  const { grid } = useGridState();
  return (
    /* <BrowseRoouter>
        <Routes>
          <Route path="/login" element={<Login />} */

    <div>
      <StyledIcon />
      <StyledSection>
        <Main>
          <LeftSide>
            <PlayerInfo info={playerInfo} />
            <GameInfo></GameInfo>
          </LeftSide>
          <Grid grid={grid} />
          <RightSide>
            <NextTetromino></NextTetromino>
          </RightSide>
        </Main>
      </StyledSection>
    </div>
  );
};

export default App;
