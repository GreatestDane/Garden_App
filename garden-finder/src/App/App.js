import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home.js";
import Maps from '../components/Maps/Maps.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path='/' component={ Home } exact />
            <Route path='/map' component={ Maps } exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
