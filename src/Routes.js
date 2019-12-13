// Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Route Components
import Home from "./components/Home";
import About from "./components/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home test="test" />} />
      <Route exact path="/about" render={() => <About test="test" />} />
    </Switch>
  );
};

export default Routes;
