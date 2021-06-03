/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  Button,
  Card,
  Col,
  Descriptions,
  Empty,
  Form,
  Input,
  Modal,
  Row,
} from 'antd';
import './index.scss';
import { EditTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import IUser from '../../model/userModel';
import { Header } from '../components/header';

export default class User extends React.Component<{}, IUser> {
  public constructor(props: IUser) {
    super(props);
    this.state = {
      isOpenEditUserInfoPanel: false,
      isOpenAddExperimentDataPanel: false,
    };
  }

  public openEditUserInfoPanel = () => {
    this.setState({
      isOpenEditUserInfoPanel: true,
    });
  }

  public closeEditUserInfoPanel = () => {
    this.setState({
      isOpenEditUserInfoPanel: false,
    });
  }

  public openAddExperimentDataPanel = () => {
    this.setState({
      isOpenAddExperimentDataPanel: true,
    });
  }

  public closeAddExperimentDataPanel = () => {
    this.setState({
      isOpenAddExperimentDataPanel: false,
    });
  }

  public render() {
    const { isOpenEditUserInfoPanel, isOpenAddExperimentDataPanel } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const name = '<script>alert("this is xss")</script>';

    return (
      <>
        <Header />
        <div className="m-user-container">
          <div className="m-user-card">
            <Row gutter={16}>
              <Col span={12}>
                <Card
                  title="User Info"
                  bordered={false}
                  actions={[
                    <EditTwoTone className="m-user-icon" key="edit" onClick={this.openEditUserInfoPanel} />,
                  ]}
                >
                  <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="User name" span={1}>{name}</Descriptions.Item>
                    <Descriptions.Item label="E-mail address" span={2}>1311681028@qq.com</Descriptions.Item>
                    <Descriptions.Item label="Phone number" span={1}>18018912667</Descriptions.Item>
                    <Descriptions.Item label="Country or region" span={2}>China</Descriptions.Item>
                    <Descriptions.Item label="Position" span={3}>
                      Student
                    </Descriptions.Item>
                    <Descriptions.Item label="Created time">
                      2021-05-24 18:35:42
                    </Descriptions.Item>
                    <Descriptions.Item label="Modified time">
                      2021-05-29 11:18:45
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Experiment data"
                  bordered={false}
                  actions={[
                    <PlusCircleTwoTone className="m-user-icon" key="add" onClick={this.openAddExperimentDataPanel} />,
                  ]}
                >
                  <Empty />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          visible={isOpenEditUserInfoPanel}
          title="Edit user info"
          footer={null}
        >
          <Form
            {...formItemLayout}
            name="register"
            onFinish={this.closeEditUserInfoPanel}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
            className="m-login-form"
          >
            <Form.Item
              name="name"
              label="Name"
              tooltip="What do you want others to call you?"
              rules={[{ required: false, message: 'Please input your nickname!', whitespace: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: false,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: false, message: 'Please input your phone number!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country or region"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="position"
              label="Position"
              tooltip="What is your social position, teacher, student, researcher, a company employee or a freedom person?"
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" onClick={this.closeEditUserInfoPanel}>
                Close
              </Button>
              <Button type="primary" className="c-signin">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          visible={isOpenAddExperimentDataPanel}
          title="Add experiment data"
          onOk={this.closeAddExperimentDataPanel}
          onCancel={this.closeAddExperimentDataPanel}
          footer={[
            <Button key="back" onClick={this.closeAddExperimentDataPanel}>
              Close
            </Button>,
            <Button key="submit" type="primary" onClick={this.closeAddExperimentDataPanel}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
