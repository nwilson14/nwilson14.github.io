import heart from './heart.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="heart-logo" alt="logo" />
        <p>
        ❤️ Hey cutie ❤️
        </p>
        <a
          className="hugs-link"
          href="https://c.tenor.com/DxMIq9-tS5YAAAAC/milk-and-mocha-bear-couple.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </header>
    </div>
  );
}

export default App;
