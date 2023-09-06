import { useState } from 'react';
import * as roomAPI from '../../utilities/room-api';
import {useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




export default function NewRoomPage() {
  const [validated] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    floor: '',
    capacity: '',
    roomNumber: '',
    bed: '',
  });

  const [error, setError] = useState('');

  function handleSubmit() {
   
    try {
      roomAPI.addRoom(state);
      navigate('/admin');
   
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  function handleChange(evt) {
    
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }


  return (
    <div>
      <h1 className='white-text-color'>Add New Room</h1>
      <div className="form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm={3}>Name</Form.Label>
        <Col sm={9}>
        <Form.Control required name="name" onChange={handleChange} type="text" placeholder="Enter Room Name" />
          <Form.Control.Feedback type="invalid">
            Please provide room name.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="floor">
          <Form.Label column sm={3}>Floor</Form.Label>
          <Col sm={9}>
          <Form.Control required name="floor" onChange={handleChange} type="text" placeholder="Enter Your Floor" />
          <Form.Control.Feedback type="invalid">
            Please provide the floor this room is located.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="capacity">
          <Form.Label column sm={3}>Capacity</Form.Label>
          <Col sm={9}>
          <Form.Control required name="capacity" onChange={handleChange} type="number" placeholder="Enter Capacity" />
          <Form.Control.Feedback type="invalid">
            Please provide Capacity.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="roomNumber">
          <Form.Label column sm={3}>Room Number</Form.Label>
          <Col sm={9}>
          <Form.Control required name="roomNumber" onChange={handleChange} type="text" placeholder="Enter Your Room Number" />
          <Form.Control.Feedback type="invalid">
            Please provide the room number.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="bed">
          <Form.Label column sm={3}>Bedrooms</Form.Label>
          <Col sm={9}>
          <Form.Control required name="bed" onChange={handleChange} type="number" placeholder="Enter Number of Bedrooms" />
          <Form.Control.Feedback type="invalid">
            Please provide the bedrooms.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="price">
          <Form.Label column sm={3}>Price</Form.Label>
          <Col sm={9}>
          <Form.Control required name="price" onChange={handleChange} type="number" placeholder="Enter Total Price" />
          <Form.Control.Feedback type="invalid">
            Please provide the total price.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 8, offset: 2 }}>
          <Button type="Add">Add</Button>
        </Col>
      </Form.Group>
     </Form>
    <p className="error-message">&nbsp;{error}</p>
    </div>
  </div>
  );
}