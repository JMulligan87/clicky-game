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


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Jumbotron />
        <ClickGame />
      </Container>
    );
  }
}

export default App;
