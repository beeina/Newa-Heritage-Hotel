// import './BookingListOrder.css';

export default function BookingListOrder({ booking, handleAddToBooking }) {
  return (
    <div className="BookingListOrder">
      <div className="fullName">{booking.fullName}</div>
      <div className="address">{booking.address}</div>
      <div className="phoneNumber">{booking.phoneNumber}</div>
      <div className="email">{booking.email}</div>
      <div className="capacity">{booking.capacity}</div>
      <div className="roomNumber">{booking.roomNumber}</div>
      <div className="name">{booking.name}</div>
      <div className="bed">{booking.bed}</div>
      <div className="fromDate">{booking.fromDate}</div>
      <div className="toDate">{booking.toDate}</div>
        <button className="btn-sm" onClick={() => handleAddToBooking(booking._id)}>
          ADD
        </button>
      </div>
  );
}





// export default function BookingListOrder({ booking, activebooking, setActiveBooking }) {
//     return (
//       <div
//         className={`bookingListOrder ${booking === activebooking ? 'selected' : ''}`}
//         onClick={() => setActiveBooking(booking)}
//       >
//       </div>
//   );
// }
