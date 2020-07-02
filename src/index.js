import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import weatherSearch from "./components/weatherSearch";
import savedWeathers from "./components/savedWeathers";
import Header from "./components/layout/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={weatherSearch} />
      <Route path="/savedWeathers" component={savedWeathers} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
