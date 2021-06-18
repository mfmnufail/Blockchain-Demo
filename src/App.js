import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Key from "./Components/Key";
import Signature from "./Components/Signature";
import Transaction from "./Components/Transaction";
import Blockchain from "./Components/Blockchain";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route path="/key" exact component={Key} />
        <Route path="/signature" exact component={Signature} />
        <Route path="/transaction" exact component={Transaction} />
        <Route path="/blockchain" exact component={Blockchain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
