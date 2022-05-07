import './App.css';
import {CounterComponent} from './CounterComponent';

function App() {
  function notifyFn(message) {
    console.log(`message in App.js -- ${message}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CounterComponent
          name={"My First Counter"}
          notify={notifyFn}
        />
      </header>
    </div>
  );
}

export default App;
