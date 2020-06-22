import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home.js";
// import Map from '../elements/Map/Map.js';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path='/' component={ Home } exact />
            <Route path='/map' component={ Map } exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
