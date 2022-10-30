import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Continent from "./pages/Continent";
import NotFound from './pages/NotFound';
import CountriesProvider from "./context/CountriesProvider";

class App extends React.Component {
  render() {
    return (
      <CountriesProvider>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/continent/:id' component={ Continent }/>
          <Route path='*' component={ NotFound }/>
        </Switch>
      </CountriesProvider>
    );
  }
}

export default App;
