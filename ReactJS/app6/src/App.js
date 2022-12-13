import logo from './logo.svg';
import './App.css';
import FirstSubComp, { FirstComp } from './Components/comp1';
import FirstClassSubComp, { FirstClassComp } from './ClassComponents/classComp1';
import { SecondComp } from './Components/comp2';
import { SecondClassComp } from './ClassComponents/classcomp2';
import ThirdComp from './Components/comp3';
import ThirdClassComp from './ClassComponents/classComp3';
import { ForthComp } from './Components/comp4';
import { FourthClassComp } from './ClassComponents/classComp4';
import FifthComp from './Components/comp5';
import FifthClassComp from './ClassComponents/classComp5';
import { SixthComp } from './Components/comp6';
import SixthClassComp from './ClassComponents/classComp6';
import { SevenComp } from './Components/comp7';
import { SevenClassComp } from './ClassComponents/classComp7';
import EightComp from './Components/comp8';
import EightClassComp from './ClassComponents/classComp8';
import { NineComp } from './Components/comp9';
import { NineClassComp } from './ClassComponents/classComp9';
import TenComp from './Components/comp10';
import TenClassComp from './ClassComponents/classComp10';

function App() {
  return (
    <div className="App">
      <FirstComp/>
      <FirstSubComp/>
      <FirstClassComp/>
      <FirstClassSubComp/>
      <SecondComp/>
      <SecondClassComp/>
      <ThirdComp/>
      <ThirdClassComp/>
      <ForthComp/>
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
