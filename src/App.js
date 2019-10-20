import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import Container from "./components/Container";
import ClickGame from "./components/ClickGame"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: [...characters],
    currentScore: 0,
    highScore: 0
  };




  onClick = (id) => {
    console.log(id)
    let isRight = false;
    characters.forEach(character => {
      if (id === character.id) {
        if (!character.clicked) {
          isRight = true
          character.clicked = true;
        }
        console.log(isRight)
        this.shuffleCards();
      }
    })
    if (isRight === true) {
      this.rightClick(characters);
    } else {
      this.wrongClick(characters);
    }

  }

  shuffleCards = (characters) => {
    let shuffle = this.state.characters.slice();

    for (let i = shuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    this.setState({ characters: shuffle });
  }

  rightClick = (characters) => {
    let test = this.state.currentScore + 1;
    let highScore = this.state.highScore;

    if (test>highScore){
      this.setState({
        currentScore: test,
        highScore: test
      })

    }


  }

  wrongClick = (characters) => {
    this.setState({
      currentScore: 0
    });
  }

  // if(characters.clicked===true){
  //   // console.log(this)
  //   this.setState({clicked: false,
  //     currentScore: 0
  //   })
  // }else{
  //   this.setState({clicked: true})
  //   this.setState({currentScore: test})
  // }





  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Jumbotron
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <div className="row">
          {this.state.characters.map(character => (
            <ClickGame
              image={character.image}
              key={character.id}
              onClick={() => this.onClick(character.id)}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
