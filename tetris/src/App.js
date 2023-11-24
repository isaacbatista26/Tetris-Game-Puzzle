import React from 'react';
import { useEffect, useState } from 'react';
import Grid from './Components/Grid';
import useGridState from './Hooks/useGridState';

const App = () => {
  //const { grid, rotateObject, toDown } = useGridState();
  const { grid, setGrid } = useGridState();

  const [i, setI] = useState(0);

  
  useEffect(() => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[i][0] = 'S';
      return newGrid;
    });
  }, [i]);

  grid[0][0] = 'S';

  return (
    <div>
      <p>Count: {i}</p>
      <button onClick={() => setI((prevI) => prevI + 1)}>+</button>
      <h1>Tetris Block Puzzle</h1>
      <Grid grid={grid} />
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
