import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import React from "react";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Ermes Ramos",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Raul Dominguez",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Maria Magdalena",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Cristina Rojo",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Nerea",
  },
];

const QueuePage = () => {
  useHideMenu(true);
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Text style={{ fontSize: "25px", fontWeight: "bold" }}>
        Serving The Clients
      </Text>
      <Row>
        <Col span={10} align="center">
          <Divider>Current</Divider>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: "100%", marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Desktop: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title level={3}>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={2}></Col>
        <Col span={10} align="center">
          <Divider>History</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item.Meta
                title={`Ticket No. ${item.ticketNo}`}
                style={{ margin: "50px" }}
                description={
                  <>
                    <Text type="secondary">On the Desk: </Text>
                    <Tag color="magenta"> {item.ticketNo}</Tag>
                    <Text type="secondary">Agent: </Text>
                    <Tag color="volcano"> {item.agente}</Tag>
                  </>
                }
              ></List.Item.Meta>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QueuePage;
