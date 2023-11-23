import React from 'react';
import Grid from './Components/Grid';

const App = () => {
  const gridData = Array.from({ length: 20 }, (_, rowIndex) =>
    Array.from({ length: 10 }, (_, colIndex) => rowIndex * 10 + colIndex + 1)
  );

  return (
    <div>
      <h1>Grid App</h1>
      <Grid grid={gridData} />
    </div>
  );
};

export default App;
