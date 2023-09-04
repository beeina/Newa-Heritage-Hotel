import RoomListCard from '../RoomListCard/RoomListCard';


export default function RoomList({ rooms }) {
    const RoomList = rooms.map(room => <RoomListCard
    room={room}
    key={room._id}
  />);

  return (
    <main>
      {RoomList}
    </main>
  );
} 
