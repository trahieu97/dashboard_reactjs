import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "dashboard/assets/css/material-dashboard-react.css?v=1.5.0";
import IndexPage from "clients/Index";
import Dashboard from "dashboard/layouts/Dashboard/Dashboard.jsx";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={IndexPage}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
  </Router>,
  document.getElementById("app")
);
