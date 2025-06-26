import './App.css';
import React from 'react'

class AffiliationsItemRow extends React.Component {
  render(){
    return (
      <li>{this.props.url}</li>
    )
  }
}

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      CharacterLoaded: false, // Awal nya False
      name: null,
      image: null,
      height: null,
      gender: null,
      homeworld: null,
      affiliations: []
    }
  }

  // Event listener when 'click' will run this function
  buttonClick() {
    const randomNumber = Math.ceil(Math.random()*88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`; // assigned the api url to the variable 
    fetch(url) // fetch it the parameter is the variabel of the url
      .then(response => response.json()) // make it into json
      .then(data => { // assign the value/output of the api to variable called 'data'
        console.log(data);
        this.setState({
          name: data.name,
          image: data.image,
          height: data.height,
          gender: data.gender,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          CharacterLoaded: true // Set menjadi True ketika button di click 
        })
      })
  }

  render () {

    const affiliations = this.state.affiliations.map((url, i) => {
      return <AffiliationsItemRow key={i} url={url} />
    })

    return (
      <div>
        {/* To Make name and the others hide before button clicked */}
        {
          this.state.CharacterLoaded && // Secara Default Disini Menjadi True, yang tadi nya false
          <div>
            {/* Final Project make the image */}
              <img 
                src={this.state.image} 
                alt={this.state.name}
                style={{maxWidth: '300px', borderRadius: '10px'}}></img>
              <h1>{this.state.name}</h1>
              <p>Height: {this.state.height} cm</p>
              <p>Gender: {this.state.gender}</p>
              <p>Homeworld: {this.state.homeworld}</p>
              <ul>
                {affiliations}
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
