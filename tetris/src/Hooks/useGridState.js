// useGridState.js
import { useState } from 'react';

const useGridState = () => {
  const initialGrid = Array.from({ length: 20 }, () => Array(10).fill(0));
  const [grid, setGrid] = useState(initialGrid);

  const updateGrid = (newGridData) => {
    setGrid(newGridData);
  };

  const rotateObject = (tetrimo) => { //tetrimo eh o array do objeto que queremos rotacionar
    // Implemente a lógica para rotacionar o objeto no grid
    // crie a lógica de rotacao e coloque na variavel rotatedGrid
    //const rotatedGrid =  novaGrid
    //setGrid(rotatedGrid); // aqui setamos a grid
  };

  const toDown = () => {
    // Implemente a lógica para mover o objeto para baixo no grid
    // const movedDownGrid = ....
    //setGrid(movedDownGrid); //aqui setamos a grid
  };

  return {
    grid,
    updateGrid,
    rotateObject,
    toDown,
  };
};

export default useGridState;
