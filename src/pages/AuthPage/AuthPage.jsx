import { useState } from 'react';
import './AuthPage.css';
import { Button, Col } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser, user}) {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  if (user) {
    navigate('/')
  }
  return (
    <Col md={{span: 8, offset: 2}}>

      <Button variant="info" onClick={() => setShowSignUp(!showSignUp)}> Click for {showSignUp ? 'Log In' : 'Sign Up'}</Button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </Col>
  );
}