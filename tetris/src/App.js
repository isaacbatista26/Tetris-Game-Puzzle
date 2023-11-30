// App.js
import React from 'react';
import {Main} from './Components/styles/Main';
import {LeftSide} from './Components/styles/LeftSide';
import {RightSide} from './Components/styles/RightSide';
import Grid from './Components/Grid';
import PlayerInfo from './Components/PlayerInfo';
import GameInfo from './Components/GameInfo'
import NextTetromino from './Components/NextTetromino'
import StyledIcon from './Components/styles/StyledIcon';

import useGridState from './Hooks/useGridState';

const App = ({ playerInfo }) => {
  const { grid } = useGridState();
  return (
    <div>
      <StyledIcon />
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
    </div>
  );
};

export default App;
