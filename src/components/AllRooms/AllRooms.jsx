import { useState, useEffect } from 'react';
import * as roomAPI from '../../utilities/room-api';
import RoomList from '../../components/RoomList/RoomList';


export default function AllRooms() {
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
    <main>
      <h1 className="white-text-color">All Rooms</h1>
      <RoomList rooms={rooms}/>
    </main>
  );
}



