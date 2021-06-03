import * as React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import './index.scss';

export interface ISearch {
  promptValue: string,
  operationValue: string,
  apiSearch: () => void,
}

export class Search extends React.Component<ISearch, {}> {
  public constructor(props: ISearch) {
    super(props);
    this.state = {

    };
  }

  public render() {
    const { promptValue, operationValue, apiSearch } = this.props;
    return (
      <>
        <div className="g-search-container">
          <Space direction="vertical" className="g-search-surround">
            <Input.Search
              placeholder={promptValue}
              allowClear
              enterButton={operationValue}
              size="middle"
              onSearch={apiSearch}
            />
          </Space>
        </div>
      </>
    );
  }
}
