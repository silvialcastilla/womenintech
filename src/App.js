import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import Bars from './components/Bars.js'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
          <Bars></Bars>
    </div>
  );
}

export default App;
