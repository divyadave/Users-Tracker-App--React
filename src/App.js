
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {
  const [userlist, setUsers] = useState([]);
  const newUserHandler = (userName, userAge) => {
    setUsers(previousUser => {
      const updatedUser = [...previousUser];
      updatedUser.unshift({name: userName, age: userAge, id: Math.random().toString()})
      return updatedUser;

    })

  }
  return (
    <>
      <AddUsers onAddUser={newUserHandler}></AddUsers>
      <UsersList users={userlist}></UsersList>
      
    </>
  );
}

export default App;
