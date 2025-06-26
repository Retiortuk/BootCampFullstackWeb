import './App.css';
import React from 'react'

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      CharacterLoaded: false, // Awal nya False
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }

  // Event listener when 'click' will run this function
  buttonClick() {
    this.setState({
      name: 'Luke',
      height: 172,
      homeworld: 'Bekasi',
      films: ['Star Wars 1', 'Star Wars 2'],
      CharacterLoaded: true // Set menjadi True ketika button di click 
    })
  }

  render () {
    return (
      <div>
        {/* To Make name and the others hide before button clicked */}
        {
          this.state.CharacterLoaded && // Secara Default Disini Menjadi True, yang tadi nya false
          <div>
              <h1>{this.state.name}</h1>
              <p>Height: {this.state.height} cm</p>
              <p>Homeworld: {this.state.homeworld} </p>
              <ul>
                <li>{this.state.films[0]}</li>
              </ul>
          </div>
        }
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
