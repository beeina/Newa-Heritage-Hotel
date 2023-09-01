import './BookingListOrder.css';

export default function BookingListOrder({ booking, activeBooking, setActiveBooking }) {
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
      <label className="">Phone Number:&nbsp;&nbsp;<strong>{booking.phoneNumber}</strong> </label>
      <label className="">Email:&nbsp;&nbsp;<strong>{booking.email}</strong> </label>
      <label className="">Capacity:&nbsp;&nbsp;<strong>{booking.capacity}</strong> </label>
      <label className="">Room Number:&nbsp;&nbsp;<strong>{booking.roomNumber}</strong> </label>
      <label className="">Bedroom:&nbsp;&nbsp;<strong>{booking.bed}</strong> </label>
      <label className="">Check-in Date:&nbsp;&nbsp;<strong>{booking.fromDate}</strong> </label>
      <label className="">Check-out Date:&nbsp;&nbsp;<strong>{booking.toDate}</strong> </label>
      </div>
    </div>
  );
}

