import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainPage from './Components/MainPage';
import Branches from './Components/Branches';
import Items from './Components/Items';
import ContactUs from './Components/ContactUs';
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/branches' element={<Branches/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
