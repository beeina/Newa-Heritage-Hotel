import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import { Container, Row } from 'react-bootstrap';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BootstrapNavbar from '../../components/BootstrapNavbar/BootstrapNavbar';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
  <>
    <BootstrapNavbar user={user} setUser={setUser} />
    <Container>
      <Row>
       {user ? (
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/booking/new" element={<NewBookingPage />} />
              <Route path="/booking" element={<OrderHistoryPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}  
      </Row>
    </Container>
  </>
  );
}
