/* eslint-disable react/no-unused-state */
import * as React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';

export interface INavBar {
  item?: string;
  path?: string;
}

export class NavBar extends React.Component<INavBar, INavBar> {
  public constructor(props: INavBar) {
    super(props);
    this.state = {
      item: props.item,
      path: 'home',
    };
  }

  public handleClick = (event: any) => {
    this.setState({ item: event.key });
  };

  public redirectRoute = (path: string) => {
    this.setState({ path });
    // this.props.history.push(this.state.path);
    // console.log(this.state.path);
  }

  public render() {
    const { item } = this.state;
    return (
      <>
        <div className="m-navbar-container">
          <div className="m-navbar">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[item!]}
              mode="horizontal"
              theme="light"
            >
              <Menu.Item key="home">
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="browseDB">
                Browse DB
              </Menu.Item>
              <Menu.Item key="search">
                Search
              </Menu.Item>
              <Menu.Item key="blast">
                <Link to="/blast">Blast</Link>
              </Menu.Item>
              <SubMenu key="analysis" title="Expression analysis">
                <Menu.ItemGroup>
                  <Menu.Item key="BySpecies">
                    <Link to="/analysis/BySpecies">By Species</Link>
                  </Menu.Item>
                  <Menu.Item key="ByGerm">
                    <Link to="/analysis/ByGerm">By Germ</Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="statistics">
                Statistics
              </Menu.Item>
              <Menu.Item key="download">
                Download
              </Menu.Item>
              <Menu.Item key="help">
                Help
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </>
    );
  }
}
