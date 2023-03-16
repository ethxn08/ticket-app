import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserStorage } from "../helpers/getUserStorage";
import useHideMenu from "../hooks/useHideMenu";
const { Title, Text } = Typography;

const DesktopPage = () => {
  const navigate = useNavigate();
  useHideMenu(false);
  const [user] = useState(getUserStorage());

  const onExit = () => {
    console.log("Exit....");
    localStorage.clear();
    return navigate("/login");
  };

  const nextTicket = () => {
    console.log("Next ticket");
  };

  if (!user.agent || !user.desktop) {
    return navigate("/login");
  }
  return (
    <>
      <Row>
        <Col span={15}>
          <Title level={2}>Desktop Agent: {user.agent}</Title>
          <Text>
            Usted esta trabajando en el escritorio:
            <span style={{ fontSize: "18px", color: "red" }}>
              {user.desktop}
            </span>
          </Text>
        </Col>

        <Col span={9}>
          <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              style={{ backgroundColor: "#bfe3ab", color: "#2b3739" }}
              onClick={nextTicket}
            >
              <RightOutlined /> Next Ticket
            </Button>
            <Button
              shape="round"
              onClick={onExit}
              style={{ backgroundColor: "#De4e4e", color: "white" }}
            >
              <CloseCircleOutlined></CloseCircleOutlined>
              Exit
            </Button>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el tiquet numero: </Text>
          <span style={{ fontSize: "18px", color: "green" }}>55</span>
        </Col>
      </Row>
    </>
  );
};

export default DesktopPage;
