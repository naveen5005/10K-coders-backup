import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element = {<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
