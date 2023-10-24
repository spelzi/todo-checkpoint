import React from "react";
import { Card, Button } from "react-bootstrap";

const ListTask = (props) => {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <Card style={{ width: "100%", marginBottom: "20px" }} key={task.id}>
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Button variant="primary">View Blog</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ListTask;
