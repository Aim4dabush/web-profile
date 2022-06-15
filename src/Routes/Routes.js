import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={Projects} path="/projects" />
    <Route component={Resume} path="/resume" />
    <Route component={Contact} path="/contact" />
  </Switch>
);
