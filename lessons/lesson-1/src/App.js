import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello World!!!</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
      </div>
    </div>
  );
}

export default App;
