import { Input, Space } from 'antd';
import axios from 'axios';
import * as React from 'react';
import IGermSearch from '../../model/germSearchModel';
import { Header } from '../components/header';
import { NavBar } from '../components/navBar';
import './index.scss';

export default class GermSearch extends React.Component<{}, IGermSearch> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      searchValue: undefined,
    };
  }

  public ApiSearch = (values: any) => {
    axios({
      method: 'get',
      url: 'http://localhost:8444/search/germ',
      data: {
        values,
      },
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        (window as any).LoginStatus = true;
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  public render() {
    const { searchValue } = this.state;
    return (
      <>
        <Header />
        <NavBar
          item="search"
        />
        <div className="g-search-container">
          <Space direction="vertical" className="g-search-surround">
            <Input.Search
              placeholder="Search a germ name like f__Burkholderiaceae or s__Ruminococcus_gnavus"
              allowClear
              enterButton="Search"
              size="middle"
              value={searchValue}
              onSearch={this.ApiSearch}
            />
          </Space>
        </div>
        <div className="p-germsearch-container">
          <text>
            home
          </text>
        </div>
      </>
    );
  }
}
