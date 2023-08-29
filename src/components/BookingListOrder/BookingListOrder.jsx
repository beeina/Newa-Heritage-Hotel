import './BookingListOrder.css';

export default function BookingListOrder({ booking, handleAddToBooking, activeBooking, setActiveBooking }) {
  return (
    <div
      className={`BookingListOrder ${booking === activeBooking ? 'selected' : ''}`}
      onClick={() => setActiveBooking(booking)} >    
      {/* <div>
      
        <div className="smaller">{new Date(booking.updatedAt).toLocaleDateString()}</div>
      </div> */}
    <div className="form-container">
     
      <label class="">Guest Full Name:&nbsp;&nbsp;<strong>{booking.guestFullName}</strong> </label>
      <label class="">Address:&nbsp;&nbsp;<strong>{booking.address}</strong> </label>
      <label class="">phoneNumber:&nbsp;&nbsp;<strong>{booking.phoneNumber}</strong> </label>
      <label class="">email:&nbsp;&nbsp;<strong>{booking.email}</strong> </label>
      <label class="">capacity:&nbsp;&nbsp;<strong>{booking.capacity}</strong> </label>
      <label class="">roomNumber:&nbsp;&nbsp;<strong>{booking.roomNumber}</strong> </label>
      <label class="">bed:&nbsp;&nbsp;<strong>{booking.bed}</strong> </label>
      <label class="">fromDate:&nbsp;&nbsp;<strong>{booking.fromDate}</strong> </label>
      <label class="">toDate:&nbsp;&nbsp;<strong>{booking.toDate}</strong> </label>
      </div>
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
