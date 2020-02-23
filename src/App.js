import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";

import WrappedHorizontalLoginForm from "./pages/form/InlineLoginForm";
import RouterIndex from "./router";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Button type="primary">Button</Button>
          <br />
          <br />
          <RouterIndex />
          <br />

          <WrappedHorizontalLoginForm />
        </div>
      </>
    );
  }
}

export default App;
