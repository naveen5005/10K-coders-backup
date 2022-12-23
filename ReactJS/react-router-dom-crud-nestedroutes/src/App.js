import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './Components/Layout';
import DeleteUser from './Components/DeleteUser';
import Users from './Components/Users';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {/* <Route path='/users' element={<Users/>} /> */}
            <Route path='/delete' element={<DeleteUser/>}/>
            <Route path='/edit' element={<EditUser/>}/>
            <Route path='/create' element={<CreateUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
