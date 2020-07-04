import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header/Header.js";
import Home from "../Home/Home.js";
import Maps from '../components/Maps/Maps.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
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
