import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import Container from "./components/Container";
import ClickGame from "./components/ClickGame"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
    
  };
      
  onClick=(e) => {
    console.log(e)
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Jumbotron />
        <div className="row">
        {this.state.characters.map(character => (
          <ClickGame
          id={character.id}
          image={character.image}
          onClick={this.onClick}
          />
        ))}
        </div>
      </Container>
    );
  }
}

export default App;
