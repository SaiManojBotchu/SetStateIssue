import React, { Component } from 'react';

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    // Not a good idea to update state like this
    // if it relies on existing state values
    // this.setState({ score: this.state.score + 1 });
    // Best way to update state
    this.setState((curState) => ({ score: curState.score + 1 }));
  }

  // In below case it will only update score one time
  // instead of 3 times
  // tripleKill() {
  //   this.setState({score: this.state.score + 1});
  //   this.setState({score: this.state.score + 1});
  //   this.setState({score: this.state.score + 1});
  // }

  tripleKill() {
    // functional setState
    this.setState((curState) => {
      return { score: curState.score + 1 };
    });
    this.setState((curState) => ({ score: curState.score + 1 }));
    this.setState((curState) => ({ score: curState.score + 1 }));
  }

  // incrementScore(curState) {
  //   return {score : curState.score + 1};
  // }

  // tripleKill() {
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  // }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    );
  }
}

export default ScoreKeeper;
