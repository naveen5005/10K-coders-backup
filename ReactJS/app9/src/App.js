import logo from './logo.svg';
import './App.css';
import Student from './Components/studentClassComp';
import Employee from './Components/employeeClassComp';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <Student/> */}
      {/* <Employee/> */}
      <ParentComp/>
    </div>
  );
}

export default App;
