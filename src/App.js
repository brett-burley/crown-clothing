import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const Hats = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Dam lots of Hats</h1>
    </div>
  );
  };

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
    </div>
  );
}

export default App;
