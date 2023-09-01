import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BootstrapNavbar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Navbar.Brand href="/"><h3>Newa Heritage Hotel</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
    </Navbar>
  );
}

export default BootstrapNavbar;