import { useState, useEffect } from 'react';
import * as roomAPI from '../../utilities/room-api';
import RoomList from '../../components/RoomList/RoomList';


export default function AllRooms({ user, setUser }) {
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
    <main className="">
      <h1>All Rooms</h1>
      <RoomList rooms={rooms}/>
    </main>
  );
}



