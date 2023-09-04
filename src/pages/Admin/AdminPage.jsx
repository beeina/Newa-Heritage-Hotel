import { useState, useEffect } from 'react';
import NoAccessForm from '../../components/NoAccessForm/NoAccessForm';
import NewRoomForm from '../../components/NewRoomForm/NewRoomForm';
import AllRooms from '../../components/AllRooms/AllRooms';
import * as roomAPI from '../../utilities/room-api';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AdminPage({ user, setUser }) {

    const adminEmails = ['bina02@gmail.com'];
    let isAdmin = false;
    if (adminEmails.indexOf(user.email) >= 0) {
        isAdmin = true;
    }
    const [rooms, setRooms] = useState([]);

  
  
    useEffect(function() {
      async function getRooms() {
      
        const rooms = await roomAPI.getRooms();
        console.log(rooms)
        setRooms(rooms);
      }
      getRooms();
    }, []);

  return (
    <Container className='container-margin'>
      <Row >
        <Col xs={isAdmin? 6:12} md={isAdmin? 6:12}>
        {isAdmin ? <AllRooms rooms={rooms} setUser={setUser} /> : <NoAccessForm setUser={setUser} />}
        
        </Col>
            {isAdmin ?<Col xs={6} md={6}> <NewRoomForm setUser={setUser} /> </Col>: <span ></span>}
      </Row>    
    </Container>
  );
}