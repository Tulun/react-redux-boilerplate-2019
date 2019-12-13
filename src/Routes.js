// Dependencies
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// Route Components
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const Routes = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Switch>
        <Route exact path="/" render={() => <Home test="test" />} />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </>
  );
};

export default Routes;
