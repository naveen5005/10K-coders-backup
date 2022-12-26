import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Users from './Components/Users';
import DeleteUser from './Components/DeleteUser';
import CreateUser from './Components/CreateUser';
import NavBar from './Components/NavBar';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Users/>}/>
            <Route path='/delete/:id' element = {<DeleteUser/>}/>
            <Route path='/create' element={<CreateUser/>}/> 
            <Route path='/edit/:id' element={<EditUser/>}/>         
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
