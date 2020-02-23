import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Classic from "../pages/layout/Classic";

class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route path="/classic" exact component={Classic} />
      </Switch>
    );
  }
}

export default RouterIndex;
