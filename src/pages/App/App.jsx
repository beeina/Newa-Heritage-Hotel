import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import { Container, Row } from 'react-bootstrap';

import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BootstrapNavbar from '../../components/BootstrapNavbar/BootstrapNavbar';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import BookingHistoryPage from '../BookingHistoryPage/BookingHistoryPage';
import NewRoomForm from '../../components/NewRoomForm/NewRoomForm'
import AdminPage from '../Admin/AdminPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import HomePage from '../HomePage/HomePage';

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
              <Route path="/" element={<HomePage />} />
              <Route path="/booking/new" element={<NewBookingPage />} />
              <Route path="/booking" element={<BookingHistoryPage user={user} setUser={setUser}/>} />
              <Route path="/admin" element={<AdminPage user={user} setUser={setUser}/>} />
              <Route path="/room/new" element={<NewRoomForm />} />
              <Route path="/booking/confirmation" element={<ConfirmationPage />} />
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
