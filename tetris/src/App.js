// App.js
import React from 'react';

import { StyledSection, Main, Sidebar } from './Styles';
import Grid from './Components/Grid';
import PlayerInfo from './Components/PlayerInfo';
import Score from './Components/Score'
import NextTetromino from './Components/NextTetromino'

import useGridState from './Hooks/useGridState';

const App = ({ playerInfo }) => {
  const { grid } = useGridState();
  return (
    <div>
      <h1>Tetris Block Puzzle</h1>
      <StyledSection>
        <Main>
          <Sidebar>
            <PlayerInfo info={playerInfo} />
            <Score>Score</Score>
          </Sidebar>
          <Grid grid={grid} />
          <Sidebar>
            <NextTetromino></NextTetromino>
          </Sidebar>
        </Main>
      </StyledSection>
    </div>
  );
};

export default App;
