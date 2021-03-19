import React from 'react';
import Airline from './component/airline/Airline';
import Flight from './component/flight/Flight';
import './App.css';

function App() {
  return (
    <div className="App">
        <Flight/>
        <Airline/>
    </div>
  );
}

export default App;
