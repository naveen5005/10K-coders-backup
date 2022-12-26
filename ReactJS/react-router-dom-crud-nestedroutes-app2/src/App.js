import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import NavBar from './Components/NavBar';
import CreateUser from './Components/CreateUser';
import Users from './Components/Users';
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Users/>}/>
            <Route path='/create' element={<CreateUser />} />
            <Route path='/delete/:id' element={<DeleteUser/>}/>
            <Route path='/edit/:id' element={<EditUser/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
