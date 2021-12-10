/////////////
//NB: Here im using the npm react-router-dom@5.3.0
///// "Kapehe" on youtube
////////////

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
