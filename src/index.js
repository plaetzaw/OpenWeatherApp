import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import weatherSearch from "./components/weatherSearch";
import savedWeathers from "./components/savedWeathers";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/weatherSearch" component={weatherSearch} />
        <Route path="/savedWeathers" component={savedWeathers} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
