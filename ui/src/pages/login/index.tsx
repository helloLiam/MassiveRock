/* eslint-disable react/jsx-props-no-spreading */
import {
  Form,
  Input,
  // Cascader,
  Select,
  Checkbox,
  Button,
  Cascader,
} from 'antd';
import * as React from 'react';
import ILogin from '../../model/loginModel';
import './index.scss';

export default class Login extends React.Component<ILogin, {}> {
  public constructor(props: ILogin) {
    super(props);
    this.state = {

    };
  }

  public render() {
    const { Option } = Select;

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

    const ApiSubmit = (values: any) => {
      console.log('Received values of form: ', values);
    };

    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );

    return (
      <>
        <div className="m-login-primarycontainer">
          <div className="m-login-formcontainer">
            <div className="m-login-header">
              <p>Welcome to use Insect Gut Microbiology Database : )</p>
              <p>You can fill something to sign up us</p>
            </div>
            <Form
              {...formItemLayout}
              name="register"
              onFinish={ApiSubmit}
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
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
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
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="alternateEmail"
                label="Alternate e-mail"
                tooltip="This is used as a backup mailbox."
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Telphone number"
                rules={[
                  {
                    type: 'number',
                    message: 'The input is not valid phone number',
                  },
                  {
                    required: true,
                    message: 'Please input your phone number',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="residence"
                label="Habitual Residence"
                rules={[
                  { type: 'array', required: true, message: 'Please select your habitual residence!' },
                ]}
              >
                <Cascader options={residences} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the agreement
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="m-login-bgi" />
      </>
    );
  }
}
