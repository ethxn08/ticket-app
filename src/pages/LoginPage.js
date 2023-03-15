import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { Title, Text } = Typography;
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/desktop");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title
        level={2}
        style={{
          marginLeft: "100px",
          marginBottom: "50px",
        }}
      >
        Login
      </Title>
      <Text
        style={{
          marginLeft: "100px",
          marginBottom: "50px",
        }}
      >
        Insert your Name and your Desktop Number please
      </Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent Name"
          name="Agent Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop Number"
          name="Desktop Number"
          rules={[
            {
              required: true,
              message: "Please input your desktop number!",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
