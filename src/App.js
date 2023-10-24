import React, { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/Navbar";
import ListTask from "./component/ListTask";
import { Form, Row, Col } from "react-bootstrap";
import AddTask from "./component/AddTask";

const App = () => {
  const [filteredTask, setFilteredTask] = useState([]); // Initialize an empty filteredTodo state
  const [taskList, setTaskList] = useState([
    {
      title: "New Todo",
      description: "My first todo",
      id: Math.floor(Math.random() * 1000000) + "abjkdgk",
    },
    {
      title: "Another New Todo",
      description: "My today outfit",
      id: Math.floor(Math.random() * 1000000) + "abjkdgk",
    },
    {
      title: "New Blog App",
      description: "My morning workout",
      id: Math.floor(Math.random() * 1000000) + "abjkdgk",
    },
  ]); // Initialize taskList state for storing tasks

  const filterTask = (event) => {
    const filtered = taskList.filter(
      (task) => task.title.toLowerCase() === event.target.value.toLowerCase()
    );

    return setFilteredTask(filtered);
  };

  const addTask = (taskData) => {
    return setTaskList([...taskList, taskData]);
  };

  return (
    <Fragment>
      <div>
        <NavBar />
      </div>
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="titleFilter">
                <Form.Control
                  type="text"
                  placeholder="Filter by title"
                  onChange={filterTask}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <ListTask
              tasks={filteredTask.length > 0 ? filteredTask : taskList}
            />

            <AddTask addTask={addTask} />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
