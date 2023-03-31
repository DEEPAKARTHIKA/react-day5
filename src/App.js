import logo from './logo.svg';
import './App.css';
import Errorboundaries from './Components/Errorboundaries';
import Object1 from './Components/Object1';
import Object2 from './Components/Object2';
import Object3 from './Components/Object3';

function App() {
  return (
    <div className="App">
      <Errorboundaries>
      <Object1/>
      </Errorboundaries>
      <Errorboundaries>
        <Object2/>
      </Errorboundaries>
      <Errorboundaries>
        <Object3/>
      </Errorboundaries>
      
    </div>
  );
}

export default App;
