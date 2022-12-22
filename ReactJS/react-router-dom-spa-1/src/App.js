import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage';
import Materials from './Components/Materials';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/materials' element={<Materials/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
