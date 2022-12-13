import FirstClassComp, { FirstClassChildComp } from "./ClassComponents/classComp1";
import { TenClassComp } from "./ClassComponents/classComp10";
import SecondClassComp from "./ClassComponents/classComp2";
import ThirdClassComp from "./ClassComponents/classComp3";
import { FourthClassComp } from "./ClassComponents/classComp4";
import FifthClassComp from "./ClassComponents/classComp5";
import SixthClassComp from "./ClassComponents/classComp6";
import SevenClassComp from "./ClassComponents/classComp7";
import { EightClassComp } from "./ClassComponents/classComp8";
import NineClassComp from "./ClassComponents/classComp9";
import FirstChildComp, { FirstComp } from "./Components/comp1";
import TenComp from "./Components/comp10";
import { SecondComp } from "./Components/comp2";
import { ThirdComp } from "./Components/comp3";
import FourthComp from "./Components/comp4";
import FifthComp from "./Components/comp5";
import { SixthComp } from "./Components/comp6";
import SevenComp from "./Components/comp7";
import EightComp from "./Components/comp8";
import { NineComp } from "./Components/comp9";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React JS</h1>

      <FirstComp/>
      <FirstChildComp/>
      <FirstClassComp/>
      <FirstClassChildComp/>
      <SecondComp/>
      <SecondClassComp/>
      <ThirdComp/>
      <ThirdClassComp/>
      <FourthComp/>
      <FourthClassComp/>
      <FifthComp/>
      <FifthClassComp/>
      <SixthComp/>
      <SixthClassComp/>
      <SevenComp/>
      <SevenClassComp/>
      <EightComp/>
      <EightClassComp/>
      <NineComp/>
      <NineClassComp/>
      <TenComp/>
      <TenClassComp/>

    </div>
  );
}

export default App;
