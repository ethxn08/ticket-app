import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CreateTicketPage from "./CreateTicketPage";
import LoginPage from "./LoginPage";
import QueuePage from "./QueuePage";
import DesktopPage from "./DesktopPage";
const { Sider, Content } = Layout;

const RouterPage = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key={1} icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<VideoCameraOutlined />}>
            <Link to="/queue">Queue</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<UploadOutlined />}>
            <Link to="/create">Create Ticket</Link>
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
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/queue" element={<QueuePage />}></Route>
            <Route path="/create" element={<CreateTicketPage />}></Route>

            <Route path="/desktop" element={<DesktopPage />}></Route>

            <Route path="/*" element={<Navigate to="/login" />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RouterPage;
