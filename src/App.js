import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';
import Container from './components/Container';
import ClickGame from './components/ClickGame';

class App extends Component {
  state = {
    characters: [...characters],
    currentScore: 0,
    highScore: 0
  };

  onClick = id => {
    console.log(id);
    let isRight = false;
    const characters = this.state.characters;

    characters.forEach(character => {
      if (id === character.id) {
        if (!character.clicked) {
          isRight = true;
          character.clicked = true;
        }
      }
    });
    if (isRight === true) {
      this.rightClick(characters);
    } else {
      this.wrongClick(characters);
    }
  };

  // shuffleCards = characters => {
  //   let shuffle = this.state.characters.slice();

  //   for (let i = shuffle.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  //   }
  //   this.setState({ characters: shuffle });
  // };

  rightClick = characters => {
    const shuffle = characters.sort(() => 0.5 - Math.random());
    let currentScore = this.state.currentScore + 1;
    let highScore = this.state.highScore;

    if (currentScore > highScore) {
      highScore = currentScore;
    }
    this.setState({
      characters: shuffle,
      currentScore: currentScore,
      highScore: highScore
    });
  };

  wrongClick = characters => {
    const shuffle = characters.sort(() => 0.5 - Math.random());

    shuffle.forEach(character => (character.clicked = false));

    this.setState({
      currentScore: 0,
      characters: shuffle
    });
    alert('Game Over! Please Play again.');
  };

  render() {
    return (
      <Container>
        <Jumbotron
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <div className='row'>
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
