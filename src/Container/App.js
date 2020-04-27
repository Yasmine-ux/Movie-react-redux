import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Description from "./MovieDescription";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Header />
          <Body />
        </Route>
        <Route exact path="/description/:id" component={Description} />
      </Switch>
    </Router>
  );
}

export default App;