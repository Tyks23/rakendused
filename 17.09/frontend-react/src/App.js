import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import {useState} from "react";

function App() {
  const [magicNumber, setMagicNumber] = useState[0]


  return (
    <div className="App">
      { magicNumber }
      <Fun  setMagicNumber = {setMagicNumber}/>
      <Fun  setMagicNumber = {setMagicNumber} amount="25" />
      <Fun  setMagicNumber = {setMagicNumber} amount="2"/>
      <Greeting name = "Matu" />
    </div>
  );
}

export default App;
