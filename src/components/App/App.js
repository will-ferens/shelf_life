import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "../Private/PrivateRoute";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
