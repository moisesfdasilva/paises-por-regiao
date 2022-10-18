import React from "react";
import { Switch, Route } from 'react-router-dom';
import Continent from "./pages/Continent";

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/continent' component={ Continent }/>
        <Route path='*' component={ NotFound }/>
      </Switch>
    );
  }
}

export default App;
