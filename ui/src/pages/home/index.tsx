import * as React from 'react';
import { Header } from '../components/header';
import { NavBar } from '../components/navBar';
import { Search } from '../components/search/index';
import './index.scss';

export default class Home extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    this.state = {

    };
  }

  public StartSearch = () => {

  }

  public render() {
    return (
      <>
        <Header />
        <NavBar
          item="home"
        />
        <Search
          promptValue="Search a bacterial genus or species"
          operationValue="Search"
          apiSearch={this.StartSearch}
        />
        <div className="m-home-description">
          <text>
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
    );
  }
}
