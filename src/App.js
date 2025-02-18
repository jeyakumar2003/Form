import React, {useState,Fragment} from 'react';

import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';


function App() {
  const [UsersList, setUserList] =useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList) =>{
      return[...prevUserList,{name :uName, age: uAge, id: Math.random.toString()}];
    } );
  }
  return (
    <Fragment>
      <AddUser onAddUser ={addUserHandler}/>
      <UserList users={UsersList}/>
    </Fragment>
  );
}

export default App;
