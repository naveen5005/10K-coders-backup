import logo from './logo.svg';
import './App.css';
import Main from './Components_tree_Props/Main';
import { useState } from 'react';

function App() {
  const [users,setUsers] = useState(["Naveen","Murali","Mahesh","Venky"])
  return (
    <div className="App">
      <Main allUsers = {users}/>
    </div>
  );
}

export default App;
