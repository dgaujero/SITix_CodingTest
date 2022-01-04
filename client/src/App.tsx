import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tickets from './components/Tickets/Tickets';

const App: React.FC = () => { // telling TS we want to App to store a functional React componenent; type safety  
  return (
    <div className="App">
      <Header/>
      <Tickets/>
    </div>
  );
}

export default App;
