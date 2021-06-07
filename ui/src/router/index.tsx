/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { UserType } from '../model/userType';
import Abundance from '../pages/abundanceAnalysis';
import Blast from '../pages/blast';
import GermSearch from '../pages/GermSearch';
import Home from '../pages/home';
import Login from '../pages/login';
import User from '../pages/user';

export interface IRouterMiddle {
  isLogin?: boolean,
  userType?: UserType
}

export class RouterMiddle extends React.Component<IRouterMiddle, {}> {
  public constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {

    };
  }

  public render() {
    const routers: React.ReactElement[] = [
      <Route exact path="/" component={Home} />,
      <Route path="/login" component={Login} />,
      <Route path="/home" component={Home} />,
      <Route path="/blast" component={Blast} />,
      <Route exact path="/analysis/ByGerm" component={Abundance} />,
      <Route exact path="/analysis/BySpecies" component={Abundance} />,
      <Route path="/user" component={User} />,
      <Route path="/search" component={GermSearch} />,
      <Redirect to="/home" />,
    ];

    return (
      <>
        <HashRouter>
          <Switch>
            {routers}
          </Switch>
        </HashRouter>
      </>
    );
  }
}
