
export default function RoomListOrder({ room, activeRoom, setActiveRoom }) {
  return (
    <div >    
        <div className="form-container">
            <label className="">Name:&nbsp;&nbsp;<strong>{room.name}</strong> </label>
            <label className="">Floor:&nbsp;&nbsp;<strong>{room.floor}</strong> </label>
            <label className="">Capacity:&nbsp;&nbsp;<strong>{room.capacity}</strong> </label>
            <label className="">Room Number:&nbsp;&nbsp;<strong>{room.roomNumber}</strong> </label>
            <label className="">Bedroom:&nbsp;&nbsp;<strong>{room.bed}</strong> </label>
        </div>
    </div>
  );
}

