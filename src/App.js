import React, { Component } from "react";
import ClickGame from "./components/ClickGame";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
          <ClickGame />
    );
  }
}

export default App;
