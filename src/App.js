import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
      super()
      this.state = {
        playerPick: '',
        playerScore: 0,
        compScore: 0,
        round: 0
      }
    }
  getCompPick = () => {
    const choice = ['totodile', 'chikorita', 'cyndaquil']
    return choice[Math.floor(Math.random()*3)]
  }

  fight = () => {
    let compPick = this.getCompPick()
    let playerPick = this.state.playerPick
    if (playerPick === compPick) {
        this.setState((prevState) => ({
          round: prevState.round + 1
        }))
    }
    else if (playerPick === 'totodile' && compPick === 'cyndaquil'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          playerScore: prevState.playerScore + 1
        }))
    }
    else if (playerPick === 'totodile' && compPick === 'chikorita'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          compScore: prevState.compScore + 1
        }))
    }
    else if (playerPick === 'chikorita' && compPick === 'cyndaquil'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          compScore: prevState.compScore + 1
        }))
    }
    else if (playerPick === 'chikorita' && compPick === 'totodile'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          playerScore: prevState.playerScore + 1
        }))
    }
    else if (playerPick === 'cyndaquil' && compPick === 'totodile'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          compScore: prevState.compScore + 1
        }))
    }
    else if (playerPick === 'cyndaquil' && compPick === 'chikorita'){
        this.setState((prevState) => ({
          round: prevState.round + 1,
          playerScore: prevState.playerScore + 1
        }))
    }
  }
  render() {
    return (
      <div>
        <h1>Choose your Pokemon!</h1>
        Player: { this.state.playerScore } Computer Score: { this.state.compScore }
        <button onClick={() => {
          this.setState({playerPick: 'totodile'});
          this.fight()
          }}>Totodile</button>
        <button onClick={() => {
          this.setState({playerPick: 'cyndaquil'});
          this.fight()
          }}>Cyndaquil</button>
        <button onClick={() => {
          this.setState({playerPick: 'chikorita'});
          this.fight()
          }}>Chikorita</button>
      </div>
    );
  }
}