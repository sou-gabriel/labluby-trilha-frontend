import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, age) => {
    setUsersList(prevUsersList => 
      [{ id: Date.now() , username, age } , ...prevUsersList])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
