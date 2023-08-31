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
     
      <label className="">Guest Full Name:&nbsp;&nbsp;<strong>{booking.guestFullName}</strong> </label>
      <label className="">Address:&nbsp;&nbsp;<strong>{booking.address}</strong> </label>
      <label className="">phoneNumber:&nbsp;&nbsp;<strong>{booking.phoneNumber}</strong> </label>
      <label className="">email:&nbsp;&nbsp;<strong>{booking.email}</strong> </label>
      <label className="">capacity:&nbsp;&nbsp;<strong>{booking.capacity}</strong> </label>
      <label className="">roomNumber:&nbsp;&nbsp;<strong>{booking.roomNumber}</strong> </label>
      <label className="">bed:&nbsp;&nbsp;<strong>{booking.bed}</strong> </label>
      <label className="">fromDate:&nbsp;&nbsp;<strong>{booking.fromDate}</strong> </label>
      <label className="">toDate:&nbsp;&nbsp;<strong>{booking.toDate}</strong> </label>
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
