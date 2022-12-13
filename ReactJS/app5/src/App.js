import { FirstClassComp } from "./classComponents/classComp1";
import { TenClassComp } from "./classComponents/classComp10";
import { SecondClassComp } from "./classComponents/classComp2";
import ThirdClassComp from "./classComponents/classComp3";
import ForthClassComp from "./classComponents/classComp4";
import { FifthClassComp } from "./classComponents/classComp5";
import SixthClassComp from "./classComponents/classComp6";
import { SevenClassComp } from "./classComponents/classComp7";
import EightClassComp from "./classComponents/classComp8";
import NineClassComp from "./classComponents/classComp9";
import FirstSubComp, { FirstComp } from "./Components/comp1";
import { TenComp } from "./Components/comp10";
import { SecondComp } from "./Components/comp2";
import ThirdComp from "./Components/comp3";
import ForthComp from "./Components/comp4";
import { FifthComp } from "./Components/comp5";
import { SixthComp } from "./Components/comp6";
import SevenComp from "./Components/comp7";
import EightComp from "./Components/comp8";
import NineComp from "./Components/comp9";

function App() {
  return (
    <div className="App">
      <FirstComp/>
      <FirstSubComp/>
      <FirstClassComp/>
      <SecondComp/>
      <SecondClassComp/>
      <ThirdComp/>
      <ThirdClassComp/>
      <ForthComp/>
      <ForthClassComp/>
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
