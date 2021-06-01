import * as React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './pages/home';
import Blast from './pages/blast';
import Login from './pages/login';
import Abundance from './pages/abundanceAnalysis';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/blast" component={Blast} />
          <Route path="/analysis/ByGerm" component={Abundance} />
          <Route path="/analysis/BySpecies" component={Abundance} />
          <Redirect to="/login" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
