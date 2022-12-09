import Abc from "./Components/firstComp";
import Def from "./classComponent/firstclassComp"
import SecondComp from "./Components/secondComp"
import SecondClassComp from "./classComponent/secondClassComp"
function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Abc/>
      <Def/>
      <SecondComp/>
      <SecondClassComp/>
    </div>
  );
}

export default App;
