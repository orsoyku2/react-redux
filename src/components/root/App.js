import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi/>
      <Dashboard/>
    </Container>
  );
}

export default App;
