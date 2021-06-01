import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css"


import bgImg from "./assets/images/bg.png"

function App() {
  const [selectedGen, setSelectedGen] = useState("1");

  const changeGen = (generation) => {
    setSelectedGen(generation)
  };

  return (
    <Router>
      <div className="App" style={{background: `url(${bgImg})`}}>
        <NavBar changeGen={changeGen} selectedGen={selectedGen} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={(props) => (
              <Dashboard {...props} selectedGen={selectedGen} />
              )} 
            />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
