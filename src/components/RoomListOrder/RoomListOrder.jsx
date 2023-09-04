import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function RoomListOrder({ room }) {
  return (
    <Container className='container-margin'>
    <Row>
         <Col xs={12} md={12} className="form-container">
         <Row>
            <Col xs={12} md={6}>Name:</Col>
            <Col xs={12} md={6}><strong>{room.name}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Floor:</Col>
            <Col xs={12} md={6}><strong>{room.floor}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Capacity:</Col>
            <Col xs={12} md={6}><strong>{room.capacity}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Room Number:</Col>
            <Col xs={12} md={6}><strong>{room.roomNumber}</strong></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>Bedroom:</Col>
            <Col xs={12} md={6}><strong>{room.bed}</strong></Col>
          </Row>
         </Col>
     </Row>
     </Container>
  );
}


