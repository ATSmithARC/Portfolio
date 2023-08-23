import * as React from "react";
import { Router, Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import p from "../data/project-data.json";
import NotFound from "../pages/notfound.jsx";
import P0 from "../projects/p0.jsx";
import P1 from "../projects/p1.jsx";
import P2 from "../projects/p2.jsx";
import P3 from "../projects/p3.jsx";
import P4 from "../projects/p4.jsx";
import P5 from "../projects/p5.jsx";
import P6 from "../projects/p6.jsx";
import P7 from "../projects/p7.jsx";
import P8 from "../projects/p8.jsx";
import P9 from "../projects/p9.jsx";
import P10 from "../projects/p10.jsx";
import P11 from "../projects/p11.jsx";
import P12 from "../projects/p12.jsx";
import P13 from "../projects/p13.jsx";
import P14 from "../projects/p14.jsx";
import P15 from "../projects/p15.jsx";
import P16 from "../projects/p16.jsx";
import P17 from "../projects/p17.jsx";
import P18 from "../projects/p18.jsx";
import P19 from "../projects/p19.jsx";
import P20 from "../projects/p20.jsx";
import P21 from "../projects/p21.jsx";
import P22 from "../projects/p22.jsx";

const r = "/projects/" ;

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path={"/projects"} component={() => <Projects filter="all" />} />
      <Route path={r + "all"} component={() => <Projects filter="all" />} />
      <Route path={r + "undergraduate"} component={() => <Projects filter="undergraduate" />} />
      <Route path={r + "graduate"} component={() => <Projects filter="graduate" />} />
      <Route path={r + "professional"} component={() => <Projects filter="professional" />} />
      <Route path={r + "pro-bono"} component={() => <Projects filter="pro-bono" />} />
      <Route path={r + p[0].href} component={P0} />
      <Route path={r + p[1].href} component={P1} />
      <Route path={r + p[2].href} component={P2} />
      <Route path={r + p[3].href} component={P3} />
      <Route path={r + p[4].href} component={P4} />
      <Route path={r + p[5].href} component={P5} />
      <Route path={r + p[6].href} component={P6} />
      <Route path={r + p[7].href} component={P7} />
      <Route path={r + p[8].href} component={P8} />
      <Route path={r + p[9].href} component={P9} />
      <Route path={r + p[10].href} component={P10} />
      <Route path={r + p[11].href} component={P11} />
      <Route path={r + p[12].href} component={P12} />
      <Route path={r + p[13].href} component={P13} />
      <Route path={r + p[14].href} component={P14} />
      <Route path={r + p[15].href} component={P15} />
      <Route path={r + p[16].href} component={P16} />
      <Route path={r + p[17].href} component={P17} />
      <Route path={r + p[18].href} component={P18} />
      <Route path={r + p[19].href} component={P19} />
      <Route path={r + p[20].href} component={P20} />
      <Route path={r + p[21].href} component={P21} />
      <Route path={r + p[22].href} component={P22} />
      <Route><NotFound /></Route>
    </Switch>
  </Router>
);

export default App;
