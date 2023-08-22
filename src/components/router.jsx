import * as React from "react";
import { Router, Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import p from "../data/project-data.json";
import NotFound from "../pages/notfound.jsx";

const projectComponents = p.map((project, index) => {
  return {
    path: "/projects/" + project.href,
    component: React.lazy(() => import(`../projects/p${index}`)),
  };
});

const App = () => (
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
      {/* Use Suspense to handle lazy loading */}
      <React.Suspense fallback={<div>Loading...</div>}>
        {projectComponents.map((projectComponent, index) => (
          <Route
            key={index}
            path={projectComponent.path}
            component={projectComponent.component}
          />
        ))}
      </React.Suspense>
      <Route><NotFound /></Route>
    </Switch>
  </Router>
);

export default App;
