/* eslint-disable no-unused-vars */
import * as React from 'react';
import {
  Button, Input, Space, Table, Upload,
} from 'antd';
import './index.scss';
import PrimaryContainer from '../primarycontainer';
import IAbundance from '../../model/abundanceModel';
// import StartBlast from '../../utility/startBlast';

export default class Abundance extends React.Component<{}, IAbundance> {
  public constructor(props: IAbundance) {
    super(props);
    this.state = {
      speciesValue: undefined,
      germValue: undefined,
    };
  }

  public HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      speciesValue: event.target.value,
      germValue: event.target.value,
    });
  }

  public render() {
    const columns: any = [
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'GermId',
        dataIndex: 'GermId',
        key: 'GermId',
      },
      {
        title: 'Biol_Kingdom',
        dataIndex: 'Biol_Kingdom',
        key: 'Biol_Kingdom',
      },
      {
        title: 'Biol_Phylum',
        dataIndex: 'Biol_Phylum',
        key: 'Biol_Phylum',
      },
      {
        title: 'Biol_Class',
        dataIndex: 'Biol_Class',
        key: 'Biol_Class',
      },
      {
        title: 'Biol_Order',
        dataIndex: 'Biol_Order',
        key: 'Biol_Order',
      },
      {
        title: 'Biol_Family',
        dataIndex: 'Biol_Family',
        key: 'Biol_Family',
      },
      {
        title: 'Biol_Genus',
        dataIndex: 'Biol_Genus',
        key: 'Biol_Genus',
      },
      {
        title: 'Biol_Species',
        dataIndex: 'Biol_Species',
        key: 'Biol_Species',
      },
      {
        title: 'Matched similar sequence',
        dataIndex: 'sequence',
        key: 'sequence',
      },
      {
        title: 'Propensity score matching',
        dataIndex: 'score',
        key: 'score',
      },
      {
        title: 'Matching similarity',
        dataIndex: 'similarity',
        key: 'similarity',
      },
    ];
    const data: any = [
      {
        key: '1',
        number: '1',
        GermId: '1111886',
        Biol_Kingdom: 'k__Bacteria',
        Biol_Phylum: 'p__Proteobacteria',
        Biol_Class: 'c__Gammaproteobacteria',
        Biol_Order: 'o__Enterobacteriales',
        Biol_Family: 'f__Enterobacteriaceae',
        Biol_Genus: 'g__Providencia',
        Biol_Species: 's__Providencia_stuartii',
        sequence: 'AGAGTTTGATCATGGCTCAGAATGAACGCTGGCGGCGTGCTTAACACATGCAAGTCGAGCGAGAAAGCTCCAAGAGACAACC',
        score: '458',
        similarity: '90%',
      },
      {
        key: '2',
        number: '2',
        GermId: '1111730',
        Biol_Kingdom: 'k__Bacteria',
        Biol_Phylum: 'p__Firmicutes',
        Biol_Class: 'c__Bacilli',
        Biol_Order: 'o__Lactobacillales',
        Biol_Family: 'f__Streptococcaceae',
        Biol_Genus: 'g__Streptococcus',
        Biol_Species: 's__Streptococcus_unclassified',
        sequence: 'AGATTAGAGTTTGATCCTGGCTCAGGATGAACGCTGGCGGCGTGCCTTAGGCATGCAAGTCAAGGGGGTCTCGCAAGAGACAACCG',
        score: '458',
        similarity: '90%',
      },
      {
        key: '3',
        number: '3',
        GermId: '370253',
        Biol_Kingdom: 'k__Bacteria',
        Biol_Phylum: 'p__Proteobacteria',
        Biol_Class: 'c__Gammaproteobacteria',
        Biol_Order: 'o__Enterobacteriales',
        Biol_Family: 'f__Enterobacteriaceae',
        Biol_Genus: 'g__Enterobacteriaceae_unclassified',
        Biol_Species: 's__Enterobacteriaceae_unclassified',
        sequence: 'AGACTCAGATTGAACGCTGGCGGCAGGCCTAACACATGCAAGTCGAACGGTAGCACAGAGGAGCTTAAGAGAAAGAGACAACC',
        score: '458',
        similarity: '90%',
      },
      {
        key: '4',
        number: '4',
        GermId: '4473818',
        Biol_Kingdom: 'k__Bacteria',
        Biol_Phylum: 'p__Firmicutes',
        Biol_Class: 'c__Bacilli',
        Biol_Order: 'o__Bacillales',
        Biol_Family: 'f__Staphylococcaceae',
        Biol_Genus: 'g__Staphylococcus',
        Biol_Species: 's__Staphylococcus_lentus',
        sequence: 'AGACGAGCGGCGGACGGGTGAGTAACGCGTAGGAACGTGCCCCAAAGTGAGGGATAAGCTCAGGAAAGAGAAGAGACAACCC',
        score: '458',
        similarity: '90%',
      },
      {
        key: '5',
        number: '5',
        GermId: '776288',
        Biol_Kingdom: 'k__Bacteria',
        Biol_Phylum: 'p__Chloroflexi',
        Biol_Class: 'c__S085',
        Biol_Order: 'o__norank',
        Biol_Family: 'f__norank',
        Biol_Genus: 'g__norank',
        Biol_Species: 's__uncultured_Chloroflexi_bacterium',
        sequence: 'AGAGCTAAAGAGTTTGATCATGGCTCAGAATGAACGCTGGCGGCGTGCTTAACACATGCAAGTCGAGCGAGAAAGCTCCAAGAGACAACC',
        score: '458',
        similarity: '90%',
      },
    ];
    const { speciesValue, germValue } = this.state;
    return (
      <>
        <PrimaryContainer />
        <div className="m-search-container">
          <Space direction="vertical" className="m-search-surround">
            <Input.Search
              placeholder="Enter the minimum subdivison level's name "
              allowClear
              enterButton="search"
              size="middle"
              value={germValue}
              onChange={() => { this.HandleChange.bind(this); }}
            // onSearch={StartBlast(germValue)}
            />
          </Space>
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
