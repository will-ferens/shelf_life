import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
