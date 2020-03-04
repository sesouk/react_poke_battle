import React, { Component } from 'react';

export default class Battle extends Component {
  constructor() {
    super()
    this.state = {
      playerPick: '',
      compPick: '',
      playerScore: 0,
      compScore: 0,
      round: 0
    }
  }
getCompPick = () => {
  const choice = ['totodile', 'chikorita', 'cyndaquil']
  this.setState((prevState) => ({
    ...prevState.state,
    compPick: choice[Math.floor(Math.random()*3)]
  }))
}

fight = () => {
  let compPick = this.getCompPick()
  let playerPick = this.state.playerPick
  if (playerPick === compPick) {
    console.log('Draw');
    
  }
  else if (playerPick === 'totodile' && compPick === 'cyndaquil'){
      this.setState((prevState) => ({
        playerScore: prevState.playerScore + 1
      }))
  }
  else if (playerPick === 'totodile' && compPick === 'chikorita'){
      this.setState((prevState) => ({
        compScore: prevState.compScore + 1
      }))
  }
  else if (playerPick === 'chikorita' && compPick === 'cyndaquil'){
      this.setState((prevState) => ({
        compScore: prevState.compScore + 1
      }))
  }
  else if (playerPick === 'chikorita' && compPick === 'totodile'){
      this.setState((prevState) => ({
        playerScore: prevState.playerScore + 1
      }))
  }
  else if (playerPick === 'cyndaquil' && compPick === 'totodile'){
      this.setState((prevState) => ({
        compScore: prevState.compScore + 1
      }))
  }
  else if (playerPick === 'cyndaquil' && compPick === 'chikorita'){
      this.setState((prevState) => ({
        playerScore: prevState.playerScore + 1
      }))
  }
}
  render() {
    return (
      <>
         <h1>Choose your Pokemon!</h1>
        Player: { this.state.playerScore } Computer Score: { this.state.compScore }
        <button onClick={() => {
          this.setState(prevState => ({...prevState.state, playerPick: 'totodile', round: prevState.round +1 }));
          this.fight()
          }}>Totodile</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState.state, playerPick: 'cyndaquil', round: prevState.round +1 }));
          this.fight()
          }}>Cyndaquil</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState.state, playerPick: 'chikorita', round: prevState.round +1 }));
          this.fight()
          }}>Chikorita</button>
      </>
    );
  }
}