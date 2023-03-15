import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
const DesktopPage = () => {
  const onExit = () => {
    console.log("Exit....");
  };

  const nextTicket = () => {
    console.log("Next ticket");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Eyyy</Title>
          <Text>Esto es mas rapido con html</Text>
        </Col>

        <Col span={4}>
          <Button shape="round" onClick={onExit}>
            <CloseCircleOutlined></CloseCircleOutlined>
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el tiquet numero: </Text>
          <Text style={{ fontSize: "30", color: "red" }}>55</Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button type="primary" onClick={nextTicket}>
            Next Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DesktopPage;
