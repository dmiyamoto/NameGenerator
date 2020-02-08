import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";
import { TopContainer } from "./top/components/Top";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(TopContainer)} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
