import './App.css';
import React from 'react'

class StarWars extends React.Component {
  // Event listener when 'click' will run this function
  buttonClick() {
    console.log("New Character from a button")
  }

  render () {
    return (
      <div>
        <h1>Name</h1>
        <p>Height: cm</p>
        <p>Homeworld: </p>
        <ul>
          <li>Films in here</li>
        </ul>
        <button type="button" 
        onClick={() => this.buttonClick()} // when button clicked will run the function buttonClick() 
        className='btn'>
          Generate Character
        </button>
      </div>
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
