import * as React from "react";
import { Router, Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import p from "../projects.json"

import P0 from "../projects/p0";
import P1 from "../projects/p1";
import P2 from "../projects/p2";
import P3 from "../projects/p3";
import P4 from "../projects/p4";
import P5 from "../projects/p5";
import P6 from "../projects/p6";
import P7 from "../projects/p7";
import P8 from "../projects/p8";
import P9 from "../projects/p9";
import P10 from "../projects/p10";
import P11 from "../projects/p11";
import P12 from "../projects/p12";
import P13 from "../projects/p13";
import P14 from "../projects/p14";
import P15 from "../projects/p15";
import P16 from "../projects/p16";
import P17 from "../projects/p17";
import P18 from "../projects/p18";
import P19 from "../projects/p19";
import P20 from "../projects/p20";
import P21 from "../projects/p21";

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
      
      <Route path={"/projects/" + p[0].href} component={P0} />
      <Route path={"/projects/" + p[1].href} component={P1} />
      <Route path={"/projects/" + p[2].href} component={P2} />
      <Route path={"/projects/" + p[3].href} component={P3} />
      <Route path={"/projects/" + p[4].href} component={P4} />
      <Route path={"/projects/" + p[5].href} component={P5} />
      <Route path={"/projects/" + p[6].href} component={P6} />
      <Route path={"/projects/" + p[7].href} component={P7} />
      <Route path={"/projects/" + p[8].href} component={P8} />
      <Route path={"/projects/" + p[9].href} component={P9} />
      <Route path={"/projects/" + p[10].href} component={P10} />
      <Route path={"/projects/" + p[11].href} component={P11} />
      <Route path={"/projects/" + p[12].href} component={P12} />
      <Route path={"/projects/" + p[13].href} component={P13} />
      <Route path={"/projects/" + p[14].href} component={P14} />
      <Route path={"/projects/" + p[15].href} component={P15} />
      <Route path={"/projects/" + p[16].href} component={P16} />
      <Route path={"/projects/" + p[17].href} component={P17} />
      <Route path={"/projects/" + p[18].href} component={P18} />
      <Route path={"/projects/" + p[19].href} component={P19} />
      <Route path={"/projects/" + p[20].href} component={P20} />
      <Route path={"/projects/" + p[21].href} component={P21} />
    </Switch>
    </Router>
);
