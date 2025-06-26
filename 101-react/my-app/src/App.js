import logo from './logo.svg';
import './App.css';
import Item from './Myitem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* React js Props */}
        <Item name="Gesa" Time="Good Morning"/>
        <Item name="Gesa" Time="Good Morning"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.js
        </a>
      </header>
    </div>
  );
}

export default App; 
