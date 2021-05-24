import * as React from 'react';
import {
  Button, Input, Space, Table, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.scss';
import PrimaryContainer from '../primarycontainer';
import IBlast from '../../model/blastModel';
// import StartBlast from '../../utility/startBlast';

export default class Blast extends React.Component<{}, IBlast> {
  public constructor(props: IBlast) {
    super(props);
    this.state = {
      geneValue: undefined,
    };
  }

  public HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      geneValue: event.target.value,
    });
  }

  public render() {
    const columns: any = [
      {
        title: 'Species of insects',
        dataIndex: 'species',
        key: 'species',
      },
      {
        title: 'Number of sequences',
        dataIndex: 'sequence',
        key: 'sequence',
      },
      {
        title: 'Number of OTUs',
        dataIndex: 'abundance',
        key: '47261',
      },
    ];
    const data: any = [
      {
        key: '1',
        species: 'House fly',
        sequence: 'AGAGTTTGATCATGGCTCAGAATGAACGCTGGCGGCGTGCTTAACACATGCAAGTCGAGCGAGAAAGCTCCAAGAGACAACC',
        abundance: '19274',
      },
      {
        key: '2',
        species: 'Fruit fly',
        sequence: 'TTAGAGTTTGATCCTGGCTCAGGATGAACGCTGGCGGCGTGCCTTAGGCATGCAAGTCAAGGGGGTCTCGCAAGAGACAACCG',
        abundance: '12952',
      },
      {
        key: '3',
        species: 'Mosquitoes',
        sequence: 'GCTCAGATTGAACGCTGGCGGCAGGCCTAACACATGCAAGTCGAACGGTAGCACAGAGGAGCTTAAGAGAAAGAGACAACC',
        abundance: '73469',
      },
      {
        key: '3',
        species: 'Cockroach',
        sequence: 'GACGAGCGGCGGACGGGTGAGTAACGCGTAGGAACGTGCCCCAAAGTGAGGGATAAGCTCAGGAAAGAGAAGAGACAACCC',
        abundance: '73469',
      },
    ];
    const { geneValue } = this.state;
    return (
      <>
        <PrimaryContainer />
        <div className="m-search-container">
          <Space direction="vertical" className="m-search-surround">
            <Input.Search
              placeholder="Enter at least 100 words"
              allowClear
              enterButton="Blast"
              size="middle"
              value={geneValue}
              onChange={() => { this.HandleChange.bind(this); }}
            // onSearch={StartBlast(geneValue)}
            />
          </Space>
          <div className="m-upload">
            <Upload
              listType="text"
              maxCount={1}
            >
              <Button
                icon={<UploadOutlined />}
                // type="primary"
              >
                上传 .fasta 数文件
              </Button>
            </Upload>
          </div>
        </div>
        <div className="m-Blast-container">
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </>
    );
  }
}
