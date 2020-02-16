import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";
import ButtonSize from "./pages/button/ButtonSize";
import LoadingButton from "./pages/button/LoadingButton";
import MulBotton from "./pages/button/MulBotton";
import GridOne from "./pages/grid/GridOne";
import GridConfig from "./pages/grid/GridConfig";
import Classic from "./pages/layout/Classic";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
        <br />
        <ButtonSize />
        <LoadingButton />
        <br />
        <MulBotton />
        <GridOne />
        <GridConfig />
        <Classic />
      </>
    );
  }
}

export default App;
