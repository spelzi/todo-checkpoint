import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const id = Math.floor(Math.random() * 1000000) + "abjkdgk";

  const onAddTask = async (event) => {
    event.preventDefault();

    if (!title || !description) {
      return;
    }

    return await props.addTask({ title, description, id });
  };
  return (
    <Form className="mt-5 mb-5" onSubmit={onAddTask}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Button type="submit"> Add Task</Button>
    </Form>
  );
};

export default AddTask;
