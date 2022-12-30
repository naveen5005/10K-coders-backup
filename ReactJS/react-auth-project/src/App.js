import './App.css';
import { MyAuthProvider } from './Components/MyAuth';
import Logincomp from './Components/Logincomp';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import { RequiredAuth } from './Components/RequiredAuth';

function App() {
  return (
    <div className="App">
      <MyAuthProvider>
        <BrowserRouter>
          <NavBar />
          <h2>Hello World from Auth Provider</h2>
          <Routes>
            <Route path='/' element={<Logincomp />} />
            <Route path='/products' element={
              <RequiredAuth>
                <Products />
              </RequiredAuth> 
            } />
          </Routes>
        </BrowserRouter>
      </MyAuthProvider>
    </div>
  );
}

export default App;
