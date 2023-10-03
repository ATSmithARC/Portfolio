import * as React from "react";
import { Router, Switch, Route } from "wouter";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import projectList from "../data/project-list.json";
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
import P23 from "../projects/p23.jsx";

const r = "/projects/";

const App = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path={"/projects"} component={() => <Projects filter="all" />} />
      <Route path={r + "all"} component={() => <Projects filter="all" />} />
      <Route
        path={r + "undergraduate"}
        component={() => <Projects filter="undergraduate" />}
      />
      <Route
        path={r + "graduate"}
        component={() => <Projects filter="graduate" />}
      />
      <Route
        path={r + "professional"}
        component={() => <Projects filter="professional" />}
      />
      <Route
        path={r + "pro-bono"}
        component={() => <Projects filter="pro-bono" />}
      />
      <Route path={r + projectList[0].href} component={P0} />
      <Route path={r + projectList[1].href} component={P1} />
      <Route path={r + projectList[2].href} component={P2} />
      <Route path={r + projectList[3].href} component={P3} />
      <Route path={r + projectList[4].href} component={P4} />
      <Route path={r + projectList[5].href} component={P5} />
      <Route path={r + projectList[6].href} component={P6} />
      <Route path={r + projectList[7].href} component={P7} />
      <Route path={r + projectList[8].href} component={P8} />
      <Route path={r + projectList[9].href} component={P9} />
      <Route path={r + projectList[10].href} component={P10} />
      <Route path={r + projectList[11].href} component={P11} />
      <Route path={r + projectList[12].href} component={P12} />
      <Route path={r + projectList[13].href} component={P13} />
      <Route path={r + projectList[14].href} component={P14} />
      <Route path={r + projectList[15].href} component={P15} />
      <Route path={r + projectList[16].href} component={P16} />
      <Route path={r + projectList[17].href} component={P17} />
      <Route path={r + projectList[18].href} component={P18} />
      <Route path={r + projectList[19].href} component={P19} />
      <Route path={r + projectList[20].href} component={P20} />
      <Route path={r + projectList[21].href} component={P21} />
      <Route path={r + projectList[22].href} component={P22} />
      <Route path={r + projectList[23].href} component={P23} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
