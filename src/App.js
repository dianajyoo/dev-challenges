import React from 'react';
import Page from './components/pages/Page';
// import PageTwo from './components/pages/PageTwo';
import data from './data/data.json';

import './App.scss';

function App() {
  return (
    <div className='App'>
      {data.map((message, idx) => (
        <Page message={message} theme={idx === 0 ? 'main' : ''} />
      ))}
    </div>
  );
}

export default App;
