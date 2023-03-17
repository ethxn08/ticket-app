import React, { useContext, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { SocketContext } from "../context/SocketContext";
import useHideMenu from "../hooks/useHideMenu";
const { Title, Text } = Typography;
const CreateTicketPage = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);
  const createTicket = () => {
    socket.emit("request-ticket", null, (ticket) => {
      setTicket(ticket);
    });
    console.log("Create Ticket");
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Press the button to create a new ticket</Title>
          <Button
            size="large"
            shape="round"
            style={{ backgroundColor: "#bfe3ab", color: "#2b3739" }}
            onClick={createTicket}
          >
            <DownloadOutlined /> Create new Ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text style={{ fontSize: 32 }}>Your number</Text>
            <br />
            <Text style={{ fontSize: 55, color: "green" }}>
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTicketPage;
