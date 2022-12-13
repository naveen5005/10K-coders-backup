import logo from './logo.svg';
import './App.css';
import { FirstComp, FirstSubComp } from './FunctionComponent/comp1';
import { FirstClassComp } from './ClassComponent/classComp1';
import FirstSubClassComp from './ClassComponent/classComp1';
import { SecondComp } from './FunctionComponent/comp2';
import { SecondClassComp } from './ClassComponent/classComp2';
import { ThirdComp } from './FunctionComponent/comp3';
import ThirdClassComp from './ClassComponent/classComp3';
import ForthComp from './FunctionComponent/comp4';
import { FourthClassComp } from './ClassComponent/classComp4';
import FifthComp, { FifthSubComp } from './FunctionComponent/comp5';
import FifthSubClassComp, { FifthClassComp } from './ClassComponent/classComp5';
import SixthComp from './FunctionComponent/comp6';
import SixthClassComp from './ClassComponent/classComp6';
import { SevenComp } from './FunctionComponent/comp7';
import { SevenClassComp } from './ClassComponent/classComp7';
import { EightComp } from './FunctionComponent/comp8';
import { ClassCompEight, EightClassComp } from './ClassComponent/classComp8';
import NineComp from './FunctionComponent/comp9';
import NineClassComp from './ClassComponent/classComp9';
import TenComp from './FunctionComponent/comp10';
import TenClassComp from './ClassComponent/classComp10';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React JS</h1>
      <FirstComp/>
      <FirstSubComp/>
      <FirstClassComp/>
      <FirstSubClassComp/>

      <SecondComp/>
      <SecondClassComp/>

      <ThirdComp/>
      <ThirdClassComp/>

      <ForthComp/>
      <FourthClassComp/>

      <FifthComp/>
      <FifthSubComp/>
      <FifthClassComp/>
      <FifthSubClassComp/>

      <SixthComp/>
      <SixthClassComp/>

      <SevenComp/>
      <SevenClassComp/>

      <EightComp/>
      <ClassCompEight/>

      <NineComp/>
      <NineClassComp/>

      <TenComp/>
      <TenClassComp/>
    </div>
  );
}

export default App;
