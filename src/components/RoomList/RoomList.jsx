import RoomListOrder from '../../components/RoomListOrder/RoomListOrder';


export default function RoomList({ rooms, activeRoom, setActiveRoom }) {
    const RoomList = rooms.map(room => <RoomListOrder
    room={room}
    key={room._id}
  />);

  return (
    <main className={`RoomList ${rooms.length ? '' : 'no-room'}`}>
      {RoomList}
    </main>
  );
} 
