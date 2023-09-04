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
              <Route path="/signin" element={<AuthPage setUser={setUser} user={user}/>} />
              <Route path="/booking" element={<BookingHistoryPage user={user} setUser={setUser}/>} />
              <Route path="/admin" element={<AdminPage user={user} setUser={setUser}/>} />
              <Route path="/room/new" element={<NewRoomForm />} />
              <Route path="/booking/confirmation" element={<ConfirmationPage />} />
            </Routes>
</>
        ) : (
          <>
      <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<AuthPage setUser={setUser}/>} />
              <Route path="/booking/new" element={<NewBookingPage />} />
              <Route path="/booking/confirmation" element={<ConfirmationPage />} />
            </Routes>

          {/* <AuthPage setUser={setUser} /> */}
          </>
        )}  
      </Row>
    </Container>
    <footer className='footer mt-auto py-3 white-text-color'>All Rights Reserved, &copy; 2023 Newa Heritage Hotel</footer>

  </>
  );
}
