
import NoAccessForm from '../../components/NoAccessForm/NoAccessForm';
import NewRoomForm from '../../components/NewRoomForm/NewRoomForm';

export default function AdminPage({ user, setUser }) {

    const adminEmails = ['beeina@hotmail.com', 'bina01@gmail.com'];
    let isAdmin = false;
    if (adminEmails.indexOf(user.email) >= 0) {
        isAdmin = true;
    }


  return (
    <main className="AuthPage">
      {isAdmin ? <NewRoomForm setUser={setUser} /> : <NoAccessForm setUser={setUser} />}
    </main>
  );
}