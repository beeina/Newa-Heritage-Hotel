import { useState } from 'react';
import * as bookingAPI from '../../utilities/booking-api';
import {useNavigate } from 'react-router-dom';
import './NewBookingPage.css';


export default function NewBookingPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    guestFullName: '',
    address: '',
    phoneNumber: '',
    capacity: '',
    roomNumber: '',
    bed: '',
    fromDate: '',
    toDate: ''
  });

  const [error, setError] = useState('');

  function handleSubmit() {
   
    try {
   
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      bookingAPI.addBooking(state);
      navigate('/booking');
   
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  function handleChange(evt) {
    
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }

    
    return (
      <div>
      <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Guest Full Name: </label>
        <input type="text" name="guestFullName" value={state.guestFullName} onChange={handleChange} required />
        <label>Address: </label>  
        <input type="text" name="address" value={state.address} onChange={handleChange} required/>
        <label>Phone Number: </label> 
        <input name="phoneNumber" value={state.phoneNumber} onChange={handleChange} required/>
        <label>Email: </label> 
        <input type="email" name="email" value={state.email} onChange={handleChange} required/>
        <label>Capacity: </label> 
        <input type="number" name="capacity" value={state.capacity} onChange={handleChange}  required/>
        <label>Bed: </label> 
        <input type="number" name="bed" value={state.bed} onChange={handleChange}  required />
        <label>From Date: </label> 
        <input type="date" name="fromDate" value={state.fromDate} onChange={handleChange}  required />
        <label>To Date: </label> 
        <input type="date" name="toDate" value={state.toDate} onChange={handleChange}  required />
      
      <button type="submit">Submit</button>
     </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
    </div>
      
  
  );
    
 }











     
  
