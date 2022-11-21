import react from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Components/Header/header';
import Body from './Components/Body/body';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    </Router>
  );
}

export default App;
