import React from 'react';
import Header from './component/header/Header';
import Box, { MinCard } from './component/box/Box';

function App() {
  return (
    <div className="">
      <Header />
      <div className='containerBox'>
        <div className='bgCover'>
        </div>
        <Box />
        <div className='container'>
          <MinCard />
        </div>

      </div>

    </div>
  );
}



export default App;
