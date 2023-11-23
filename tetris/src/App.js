import React from 'react';
import Grid from './Components/Grid'

const App = () => {
  return (
    <div>
      <h1>Grid App</h1>
      <Grid grid={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
    </div>
  );
};

export default App;