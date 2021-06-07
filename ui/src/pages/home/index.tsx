/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Route } from 'react-router-dom';
import IHome from '../../model/homeModel';
import Global from '../../utility/global';
import { Header } from '../components/header';
import { NavBar } from '../components/navBar';
import { Search } from '../components/search/index';
import Login from '../login';
import './index.scss';

export default class Home extends React.Component<IHome, IHome> {
  public constructor(props: IHome) {
    super(props);
    this.state = {
      ...props,
      loginStatus: Global.LoginStatus,
    };
  }

  public StartSearch = () => {

  }

  public getContainerPath = (routePath: string) => {
    let result: string = '';
    const routeEle: string[] = routePath.split('/');
    const routeLength: number = routeEle.length;
    switch (routeLength) {
      // Case 2:
      //     Result = `/`;
      //     This.routeType = RouteType.Normal;
      //     Break;
      case 3:
        if (routeEle[2] === 'filters') {
          result = '/requests/filters';
        } else {
          result = '/requests';
        }
        // Result = `/tasks/:type/:id/:servicetype`;
        // This.routeType = RouteType.Requests;
        break;
      case 5:
        result = '/requests/:id/:servicetype/:serviceid';
        break;
      default:
        result = '/login';
        break;
    }
    // this.routeContent = result;
    console.log(routePath);
    console.log(result);
    return result;
  }

  public HomeContainer = () => {
    const { loginStatus } = this.state;
    return (loginStatus && loginStatus === true)
      ? (
        <>
          <Header />
          <NavBar
            item="home"
          />
          {/* <Search
          promptValue="Search a bacterial genus or species"
          operationValue="Search"
          apiSearch={this.StartSearch}
        /> */}
          <div className="m-home-description">
            <text>
              eslint-disable-next-line max-len
              Database for insect gut bacteria (current version v0.1.0) is an integrated knowledge
              database dedicated to intestinal bacteria of insect.
            </text>
          </div>
          <div className="p-home-container">
            <text>
              home
            </text>
          </div>
        </>
      )
      : (
        <>
          <Login
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
          />
        </>
      );
  }

  public render() {
    const that = this;
    const { loginStatus } = this.state;
    return (
      // <Route
      //   // eslint-disable-next-line react/destructuring-assignment
      //   path={this.getContainerPath(this.props.location!.pathname)}
      //   render={(props) => (<that.HomeContainer />)}
      // />
      <that.HomeContainer />
    );
  }
}
