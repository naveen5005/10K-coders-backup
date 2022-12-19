import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Recipies from './Components/Recipies';
import UserFirst from './Components/First User/UserFirst';
import UserSecond from './Components/Second User/UserSecond';
import UserThird from './Components/Third User/UserThird';


function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <Recipies/> */}
      {/* <UserFirst/> */}
      {/* <UserSecond/> */}
      <UserThird/>
    </div>
  );
}

export default App;
