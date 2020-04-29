import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/Counters';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
        <Menu/>
        <Counters/>
    </div>
  );
}

export default App;
