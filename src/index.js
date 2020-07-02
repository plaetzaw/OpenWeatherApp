import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import weatherSearch from "./components/weatherSearch";
import savedWeathers from "./components/savedWeathers";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/weatherSearch" component={weatherSearch} />
      <Route path="/savedWeathers" component={savedWeathers} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
