import Abc from "./Components/firstComp";
import Def from "./classComponent/firstclassComp"
import SecondComp from "./Components/secondComp"
import SecondClassComp from "./classComponent/secondClassComp"
import ThirdComp from "./Components/thirdComp"
import ThirdClassComp from "./classComponent/thirdClassComp"
function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Abc/>
      <Def/>
      <SecondComp/>
      <SecondClassComp/>
      <ThirdComp/>
    <ThirdClassComp></ThirdClassComp>
    </div>
  );
}

export default App;
