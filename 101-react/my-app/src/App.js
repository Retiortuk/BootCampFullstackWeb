import './App.css';
import React from 'react'

class StarWars extends React.Component {
  render () {
    return (
      <h1>This is Star Wars</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React js Props */}
        {/* <Item name="Gesa" Time="Good Morning"/> */}
        <StarWars />
      </header>
    </div>
  );
}

export default App; 
