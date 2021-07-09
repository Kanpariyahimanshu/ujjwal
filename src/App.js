import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
import {
  retrieveTutorials,
  retrieveTutorial,
  deleteTutorial
} from "./actions/tutorials";


function App() {
  const tutorials = useSelector(state => state.tutorials.alldata);
  const Singletutorials = useSelector(state => state.tutorials.singleItem);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, []);

  const handleView = (id) => {
    setShow(true);
    dispatch(retrieveTutorial(id));
  }

  const handleDelete = (id) => {
    dispatch(deleteTutorial(id))
    .then(() => {
    })
    .catch(e => {
      console.log(e);
    });
  }

  const handleClose = () => setShow(false);

  return (
    <Container fluid>
      <Row>
        <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {tutorials && tutorials.length > 0 &&
            tutorials.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td><Button variant="success" onClick={()=>handleView(item.id)}>View</Button>
                <Button variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button> </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Col>
      </Row>
      
     {Singletutorials && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Singletutorials.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Singletutorials.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     }
    </Container>
  );
}

export default App;
