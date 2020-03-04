import React, { Component } from 'react';

export default class Battle extends Component {
  constructor() {
    super()
    this.state = {
      playerPick: '',
      compPick: '',
      playerScore: 0,
      compScore: 0,
    }
  }
getCompPick = () => {
  const choice = ['totodile', 'chikorita', 'cyndaquil']
  this.setState((prevState) => ({
    ...prevState,
    compPick: choice[Math.floor(Math.random()*3)]
  }))
}

fight = () => {
  let { playerPick, compPick } = this.state
  if (playerPick === compPick) {
    console.log('Draw');
    
  }
  else if ((playerPick === 'totodile' && compPick === 'cyndaquil') ||
          (playerPick === 'chikorita' && compPick === 'totodile')  ||
          (playerPick === 'cyndaquil' && compPick === 'chikorita')){
      this.setState((prevState) => ({
        ...prevState, playerScore: prevState.playerScore + 1
      }))
  }
  else{
    this.setState((prevState) => ({
      ...prevState, compScore: prevState.compScore + 1
    }))
  }
}
  render() {
    const { playerPick, playerScore, compScore, compPick } = this.state
    return (
      <>
         <h1>Choose your Pokemon!</h1>
        Player: { playerScore } Computer Score: { compScore }
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'totodile'}));
          this.getCompPick()
          }}>Totodile</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'cyndaquil'}));
          this.getCompPick()
          }}>Cyndaquil</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'chikorita'}));
          this.getCompPick()
          }}>Chikorita</button>
          <button onClick={() => {this.fight()}}>
            Start
          </button>
          Your Pokemon: { playerPick } Rivals Pokemon: { compPick }
      </>
    );
  }
}