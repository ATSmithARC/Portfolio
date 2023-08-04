import * as React from "react";
import { Router, Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import Barangaroo from "../projects/barangaroo-pavilion";
import Dodgers from "../projects/dodgers-stadium-extension";
import Fbi from "../projects/fbi-innovation-center";
import Hack from "../projects/hack-a-frac";
import Planimal from "../projects/planimal";
import Polyhedral from "../projects/polyhedral-timber-topologies";
import Sofi from "../projects/sofi-stadium";
import Stadiumtools from "../projects/stadiumtools";
import Structural from "../projects/structural-optimization-strategies";
import Youtube from "../projects/youtube-theater";

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={() => <Projects filter="all" />} />
      <Route path="/projects/all" component={() => <Projects filter="all" />} />
      <Route path="/projects/undergraduate" component={() => <Projects filter="undergraduate" />} />
      <Route path="/projects/graduate" component={() => <Projects filter="graduate" />} />
      <Route path="/projects/professional" component={() => <Projects filter="professional" />} />
      <Route path="/projects/pro-bono" component={() => <Projects filter="pro-bono" />} />
      
      <Route path="/projects/barangaroo-pavilion" component={Barangaroo} />
      <Route path="/projects/dodgers-stadium-extension" component={Dodgers} />
      <Route path="/projects/fbi-innovation-center" component={Fbi} />
      <Route path="/projects/hack-a-frac" component={Hack} />
      <Route path="/projects/planimal" component={Planimal} />
      <Route path="/projects/polyhedral-timber-topologies" component={Polyhedral} />
      <Route path="/projects/sofi-stadium" component={Sofi} />
      <Route path="/projects/stadiumtools" component={Stadiumtools} />
      <Route path="/projects/structural-optimization-strategies" component={Structural} />
      <Route path="/projects/youtube-theater" component={Youtube} />
    </Switch>
    </Router>
);
