import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
const { Sider, Content } = Layout;

const RouterPage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1} icon={<UserOutlined />}>
            Login
          </Menu.Item>
          <Menu.Item key={2} icon={<VideoCameraOutlined />}>
            Queue
          </Menu.Item>
          <Menu.Item key={3} icon={<UploadOutlined />}>
            Create Ticket
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default RouterPage;
