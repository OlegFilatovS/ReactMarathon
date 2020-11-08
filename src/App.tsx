import * as React from 'react';
import './styles/style.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Pokedex from './Pages/Pokedex/Pokedex';
import Layout from './components/Layout';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          render={() => (
            <>
              <Header />
              <Layout>
                <Route exact path="/pokedex" component={Pokedex} />
              </Layout>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
