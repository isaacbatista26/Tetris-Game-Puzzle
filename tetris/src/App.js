// App.js
import React from 'react';

import { StyledSection, Main, LeftSide, RightSide } from './Styles';
import Grid from './Components/Grid';
import PlayerInfo from './Components/PlayerInfo';
import GameInfo from './Components/GameInfo'
import NextTetromino from './Components/NextTetromino'

import useGridState from './Hooks/useGridState';

const App = ({ playerInfo }) => {
  const { grid } = useGridState();
  return (
    <div>
      <h3>Tetris Block Puzzle</h3>
      <StyledSection>
        <Main>
          <LeftSide>
            <PlayerInfo info={playerInfo} />
            <GameInfo>Score</GameInfo>
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
