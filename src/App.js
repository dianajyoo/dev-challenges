import React from 'react';
import Page from './components/pages/Page';
import data from './data/data.json';

import './App.scss';

function App() {
  return (
    <div className='App'>
      {data.map((message, idx) => (
        <Page
          message={message}
          theme={idx === 0 ? 'main' : ''}
          btn={idx === 0 ? 'btn--show' : 'btn--hide'}
        />
      ))}
    </div>
  );
}

export default App;
