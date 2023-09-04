import { useState } from 'react';
import * as roomAPI from '../../utilities/room-api';
import {useNavigate } from 'react-router-dom';


export default function NewRoomPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    floor: '',
    capacity: '',
    roomNumber: '',
    bed: '',
  });

  const [error, setError] = useState('');

  function handleSubmit() {
   
    try {
      roomAPI.addRoom(state);
      navigate('/admin');
   
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  function handleChange(evt) {
    
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }


  return (
    <div>
      <h1>Add New Room</h1>
      <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={state.name} onChange={handleChange} required />
        <label>Floor: </label>  
        <input type="number" name="floor" value={state.floor} onChange={handleChange} required/>
        <label>Capacity: </label> 
        <input type="number" name="capacity" value={state.capacity} onChange={handleChange}  required/>
        <label>Room Number: </label> 
        <input name="roomNumber" value={state.roomNumber} onChange={handleChange} required/>
        <label>Bed: </label> 
        <input type="number" name="bed" value={state.bed} onChange={handleChange}  required />
        <div>
          
        </div>
        <button type="add">Add</button>
     </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
  );
}