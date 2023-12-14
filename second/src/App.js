
import './App.css';
import { Tayyab } from './components/tayyab/Tayyab';
import Ahmad from './components/ahmad/Ahmad';
let a="My name is khan";
function App() {
  function handle(){
    {console.log("button is pressed")};

  }
  return (
    <div className="App">
      
        {/* <p>
          Tayyab Ahmad
        </p>
      <Tayyab abc={a} clik={handle}/> */}
      <Ahmad/>
    </div>
  );
}

export default App;
