import React from 'react';
import Header from './component/header/Header';
import Box from './component/box/Box';

function App() {
  return (
    <div className="">
      <div className='containerBox'>
        <div className='water'>
        </div>
        <svg>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
        </filter>
      </svg>
      </div>
      <Header />
      <div className='container'>
        <Box />
      </div>
    </div>
  );
}



export default App;
