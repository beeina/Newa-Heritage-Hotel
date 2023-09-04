import './BookingListCard.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as bookingAPI from '../../utilities/booking-api';
import {useNavigate } from 'react-router-dom';

export default function BookingListCard({ booking }) {
  booking.toDate = new Date(booking.toDate).toLocaleDateString('en-US');
  booking.fromDate = new Date(booking.fromDate).toLocaleDateString('en-US');

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
   
  
      const cancelBooking = await bookingAPI.cancelBookingById(booking._id);
      if (cancelBooking) {
      
        navigate('/');
      } else {
        alert("there is no rooms available.");
        navigate('/booking/new', {});
      }
    }
    catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }
  
  return (
    <Container className='container-margin'>
    <Row >
      <Col xs={6} md={3}>&nbsp;</Col>
      <Col xs={6} md={6} className="home-container">
          <Row>
            <Col xs={12} md={6}>Guest Full Name:</Col>
            <Col xs={12} md={6}><strong>{booking.guestFullName}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Address:</Col>
            <Col xs={12} md={6}><strong>{booking.address}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Phone Number:</Col>
            <Col xs={12} md={6}><strong>{booking.phoneNumber}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Email:</Col>
            <Col xs={12} md={6}><strong>{booking.email}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Number of Guests:</Col>
            <Col xs={12} md={6}><strong>{booking.capacity}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Bedroom:</Col>
            <Col xs={12} md={6}><strong>{booking.bed}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Check-in Date:</Col>
            <Col xs={12} md={6}><strong>{booking.fromDate}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Check-out Date:</Col>
            <Col xs={12} md={6}><strong>{booking.toDate}</strong></Col>
          </Row>
          <Row>
            <a href="/" onClick={handleSubmit} >Cancel</a>
          </Row>
      </Col>
     </Row>
     </Container>
  );
}

