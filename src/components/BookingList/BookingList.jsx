// import './BookingList.css';
import BookingListOrder from '../BookingListOrder/BookingListOrder';


export default function BookingList({ booking, handleAddToBooking }) {
    // const booking = booking.map(booking =>
    //   <BookingListOrder
    //     booking={booking}
    //     key={booking._id}
    //     bookingOrder={booking}
    //     handleAddToBooking={handleAddToBooking}
    //   />
    // );
    return (
      <main className="BookingList">
        {booking}
      </main>
    );
  }

// export default function BookingList({ booking, activeBooking, setActiveBooking }) {

//   const BookingList = booking.map(booking => <BookingListOrder
//     booking={booking}
//     activeBooking={activeBooking}
//     setActiveBooking={setActiveBooking}
//     key={booking.id}
//   />);

//   return (
//     <main className={`BookingList ${booking.length ? '' : 'no-booking'}`}>
//       {BookingList}
//     </main>
//   );
// } 