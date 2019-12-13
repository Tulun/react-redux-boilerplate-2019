// Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Route Components
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home test="test" />} />
      <Route exact path="/about" render={() => <About />} />
    </Switch>
  );
};

export default Routes;
