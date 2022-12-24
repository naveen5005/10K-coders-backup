import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './Components/Layout';
import DeleteUser from './Components/DeleteUser';
import Users from './Components/Users';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Users/>} />
            <Route path='/delete/:id' element={<DeleteUser/>}/>
            <Route path='/edit/:id' element={<EditUser/>}/>
            <Route path='/create' element={<CreateUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
