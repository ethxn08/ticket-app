import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { getLast } from "../helpers/getLast";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const QueuePage = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    getLast().then((data) => data);
  }, []);
  useEffect(() => {
    socket.on("asigned-ticket", (asigned) => {
      setData(asigned);
    });

    return () => {
      socket.off("asigned-ticket");
    };
  }, [data]);
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
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desktop: {item.desktop}</Tag>,
                  ]}
                >
                  <Title level={3}>No. {item.number}</Title>
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
                title={`Ticket No. ${item.number}`}
                style={{ margin: "50px" }}
                description={
                  <>
                    <Text type="secondary">On the Desk: </Text>
                    <Tag color="magenta"> {item.desktop}</Tag>
                    <Text type="secondary">Agent: </Text>
                    <Tag color="volcano"> {item.agent}</Tag>
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
