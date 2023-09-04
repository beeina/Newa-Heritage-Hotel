import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BootstrapNavbar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
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
              <Link className="nav-link" to="/orders">
                Sign In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BootstrapNavbar;