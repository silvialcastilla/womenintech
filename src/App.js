import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes"
import './App.css'
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
    </div>
  );
}

export default App;
