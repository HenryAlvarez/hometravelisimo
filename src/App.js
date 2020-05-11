import React from 'react';
import Header from './component/header/Header';
import Box from './component/box/Box';

function App() {
  return (
    <div className="">
      <Header />
      <div className='containerBox'>
        {/* <div className='bgCover'>
        </div> */}
        <div className='container'>
          <Box />
        </div>
      </div>

    </div>
  );
}



export default App;
