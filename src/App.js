import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContinentRegion from './pages/ContinentRegion';
import NotFound from './pages/NotFound';
import Country from './pages/Country';
import CountriesProvider from './context/CountriesProvider';

class App extends React.Component {
  render() {
    return (
      <CountriesProvider>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/continent/:region' component={ ContinentRegion }/>
          <Route path='/continent/:region/:id' component={ Country }/>
          <Route path='*' component={ NotFound }/>
        </Switch>
      </CountriesProvider>
    );
  }
}

export default App;
