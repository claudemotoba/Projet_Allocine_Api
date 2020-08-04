import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Accueil from './pages/Home/Home';
import Movie from './pages/Movie/Movie'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Accueil/>
        </Route>
        <Route path="/movies">
          <Movie/>
        </Route>
        <Route path="/about-us">
          
        </Route>
        <Route path="/contact">
          
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
