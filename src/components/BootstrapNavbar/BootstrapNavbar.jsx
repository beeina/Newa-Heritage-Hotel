import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate } from 'react-router-dom';

function BootstrapNavbar({user, setUser}) {
  const navigate = useNavigate();
    function handleLogOut() {
        userService.logOut();
        navigate('/');
        setUser(null);
        
    }

  return (
    <>
    <Navbar collapseOnSelect  bg="primary" data-bs-theme="dark">
       <Container fluid>
        <Navbar.Brand href="/"><h3>Newa Heritage Hotel</h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {user && user.name ? (
              <>
                <Navbar.Text>
                  Welcome: {user.name}
                </Navbar.Text>
                <Link className="nav-link" to="/booking">
                  Bookings
                </Link>
                <Link className="nav-link" to="/booking/new">
                  New Booking
                </Link>
                <Link className="nav-link float-right" onClick={handleLogOut}>Log Out</Link>
              </>
            ) : (
              <>
              <Link className="nav-link" to="/booking/new">
              New Booking
            </Link>
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
             
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BootstrapNavbar;