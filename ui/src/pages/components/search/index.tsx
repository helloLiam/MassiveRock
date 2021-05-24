import * as React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import './index.scss';

export interface ISearch {
  promptValue: string,
  operationValue: string
}

export class Search extends React.Component<ISearch, {}> {
  public constructor(props: ISearch) {
    super(props);
    this.state = {

    };
  }

  private StartSearch = (searchKey: string) => {
    // eslint-disable-next-line no-console
    console.log(searchKey);
  }

  public render() {
    const { promptValue, operationValue } = this.props;
    return (
      <>
        <div className="g-search-container">
          <Space direction="vertical" className="g-search-surround">
            <Input.Search
              placeholder={promptValue}
              allowClear
              enterButton={operationValue}
              size="middle"
              onSearch={this.StartSearch}
            />
          </Space>
        </div>
      </>
    );
  }
}
