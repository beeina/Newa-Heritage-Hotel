import { useState, useEffect } from 'react';
import NoAccessForm from '../../components/NoAccessForm/NoAccessForm';
import NewRoomForm from '../../components/NewRoomForm/NewRoomForm';
import AllRooms from '../../components/AllRooms/AllRooms';
import * as roomAPI from '../../utilities/room-api';

export default function AdminPage({ user, setUser }) {

    const adminEmails = ['beeina@hotmail.com', 'bina02@gmail.com'];
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
    <main className="AuthPage">
        {isAdmin ? <AllRooms rooms={rooms} setUser={setUser} /> : <NoAccessForm setUser={setUser} />}
      {isAdmin ? <NewRoomForm setUser={setUser} /> : <span ></span>}
    </main>
  );
}