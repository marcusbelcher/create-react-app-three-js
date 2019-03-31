import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CSS from "./CSS";
import WebGL from "./WebGL";

const Component = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/css" component={CSS} />
      <Route path="/webgl" component={WebGL} />
    </Switch>
  </main>
);

export default Component;
