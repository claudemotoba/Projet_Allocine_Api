import React from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";

import Accueil from './pages/Home/Home';
import Movie from './pages/Movie/Movie'
import Details from './pages/Details/Details'
import Search from './pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/movies/:id" component={Details} />
        <Route exact path="/movies" component={Movie} />
        <Route exact path="/search/:query" component={Search}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
