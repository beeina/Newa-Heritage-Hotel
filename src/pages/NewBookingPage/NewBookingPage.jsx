import { useState } from 'react';
import * as bookingAPI from '../../utilities/booking-api';
import * as roomAPI from '../../utilities/room-api';
import {useNavigate, createSearchParams } from 'react-router-dom';
import './NewBookingPage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function NewBookingPage() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  let today = new Date().toISOString().split("T")[0];
  const [state, setState] = useState({
    guestFullName: '',
    address: '',
    phoneNumber: '',
    capacity: '',
    roomNumber: '',
    bed: '',
    fromDate: '',
    toDate: '',
    selectedToDate: ''
  });

  const [error, setError] = useState('');

  async function handleSubmit(evt) {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    setValidated(true);

    evt.preventDefault();
    try {
   
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const rooms = await roomAPI.getRoomsByBed(state.bed)
      if (rooms.length > 0) {
        const booking = await bookingAPI.addBooking(state);
        // navigate('/booking/confirmation',{state:{id:booking._id}});
        navigate({
          pathname: '/booking/confirmation',
          search: createSearchParams({
            id: booking._id
          }).toString()
        });
      } else {
        alert("there is no rooms available.");
        navigate('/booking/new', {});
      }
    
   
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  function getToDate() {
    if (!state.selectedToDate && state.fromDate) {
      const dateArr = state.fromDate.split('-');
      state.selectedToDate = new Date(dateArr[0], parseInt(dateArr[1]) - 1, dateArr[2]);
      state.selectedToDate.setDate(state.selectedToDate.getDate() + 1);
      state.selectedToDate = state.selectedToDate.toISOString().split("T")[0];
      
    }
    return state.selectedToDate;
  }

  function handleChange(evt) {
  
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }

    
    return (
      <div className="form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group as={Row} className="mb-3" controlId="guestFullName">
          <Form.Label column sm={2}>Full Name</Form.Label>
          <Col sm={10}>
          <Form.Control required name="guestFullName" onChange={handleChange} type="text" placeholder="Enter Your Full Name" />
          <Form.Control.Feedback type="invalid">
            Please provide your full name.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
       
        <Form.Group as={Row} className="mb-3" controlId="address">
          <Form.Label column sm={2}>Address</Form.Label>
          <Col sm={10}>
          <Form.Control required name="address" onChange={handleChange} type="text" placeholder="Enter Your Address" />
          <Form.Control.Feedback type="invalid">
            Please provide your address.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
          <Form.Label column sm={2}>Phone Number</Form.Label>
          <Col sm={8}>
          <Form.Control required name="phoneNumber" onChange={handleChange} type="text" placeholder="Enter Your Phone Number" />
          <Form.Control.Feedback type="invalid">
            Please provide your phone number.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={8}>
          <Form.Control required name="email" onChange={handleChange} type="email" placeholder="Enter Your Email ID" />
          <Form.Control.Feedback type="invalid">
            Please provide your email ID.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="capacity">
          <Form.Label column sm={2}>Number of Guests</Form.Label>
          <Col sm={10}>
          <Form.Control required name="capacity" onChange={handleChange} type="number" placeholder="Enter Number of Guests" />
          <Form.Control.Feedback type="invalid">
            Please provide number of guests staying with you (including you).
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="bed">
          <Form.Label column sm={2}>Bedrooms</Form.Label>
          <Col sm={10}>
          <Form.Control required name="bed" onChange={handleChange} type="number" placeholder="Enter Bedrooms" />
          <Form.Control.Feedback type="invalid">
            Please provide the size of bedrooms.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="fromDate">
          <Form.Label column sm={2}>Check-in Date</Form.Label>
          <Col sm={10}>
          <Form.Control required name="fromDate" onChange={handleChange} min={today} type="date" placeholder="Enter Check-in Date" />
          <Form.Control.Feedback type="invalid">
            Please provide check-in date.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="toDate">
          <Form.Label column sm={2}>Check-out Date</Form.Label>
          <Col sm={10}>
          <Form.Control required name="toDate" onChange={handleChange} min={getToDate()} type="date" placeholder="Enter Check-out Date" />
          <Form.Control.Feedback type="invalid">
            Please provide check-out date.
          </Form.Control.Feedback>
          </Col>
        </Form.Group>
    
       <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 8, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
     </Form>
    <p className="error-message">&nbsp;{error}</p>
    </div>
  
  );
    
 }











     
  
