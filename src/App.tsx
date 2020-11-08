import * as React from 'react';
import './styles/style.scss';
import { Switch,Route,Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomePage from './Pages/HomePage';
import Pokedex from './Pages/Pokedex/Pokedex';

export const history = createBrowserHistory();


const App = () => {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/pokedex" component={Pokedex}/>
    </Switch>
    </Router>
  );
};

export default App;
