import React from 'react';
import Grid from './Components/Grid';
import useGridState from './Hooks/useGridState';

const App = () => {
  const { grid, rotateObject, toDown } = useGridState();

  return (
    <div>
      <h1>Grid App</h1>
      <Grid grid={gridData} />

    </div>
    /*
    <div>
      <h1>Grid App</h1>
      <button onClick={rotateObject}>Rotacionar</button>
      <button onClick={toDown}>Mover para baixo</button>
      <Grid grid={grid} rotateObject={rotateObject} toDown={toDown} />
    </div>
    */
  );
};

export default App;
