import React, { Component } from 'react';

export default class Battle extends Component {
  constructor() {
    super()
    this.state = {
      playerPick: '',
      rivalPick: '',
      playerScore: 0,
      rivalScore: 0,
      round: 0,
      winner: '',
      disable: false,
    }
  }

checkRound = () => {
  let { round, playerScore, rivalScore } = this.state
  if (round === 5) {
    if (playerScore === rivalScore) {
      this.setState(prevState => ({
        ...prevState,
        winner: 'You and your rival battle to a stale mate, battle again?',
        disable: true
      }))
    }
    else if (playerScore > rivalScore) {
      this.setState(prevState => ({
        ...prevState,
        winner: 'You defeated your rival in battle, battle again?',
        disable: true
      }))
    }
    else {
      this.setState(prevState => ({
        ...prevState,
        winner: 'You were defeated by your rival in battle, battle again?',
        disable: true
      }))
    }
  }
}

getRivalPick = () => {
  const choice = ['totodile', 'chikorita', 'cyndaquil']
  this.setState((prevState) => ({
    ...prevState,
    rivalPick: choice[Math.floor(Math.random()*3)],
  }))
}

fight = () => {
  let { playerPick, rivalPick } = this.state
  if (playerPick === rivalPick) {
    console.log('Draw');
  }
  else if ((playerPick === 'totodile' && rivalPick === 'cyndaquil') ||
          (playerPick === 'chikorita' && rivalPick === 'totodile')  ||
          (playerPick === 'cyndaquil' && rivalPick === 'chikorita')){
      this.setState((prevState) => ({
        ...prevState, playerScore: prevState.playerScore + 1
      }))

  }
  else{
    this.setState((prevState) => ({
      ...prevState, rivalScore: prevState.rivalScore + 1
    }))
  }
  
}
  render() {
    const { playerScore, rivalScore, winner } = this.state
    return (
      <>
         <h1>Choose your Pokemon!</h1>
        Player Score: { playerScore } Rival Score: { rivalScore }
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'totodile'}));
          this.getRivalPick()
          }}>Totodile</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'cyndaquil'}));
          this.getRivalPick()
          }}>Cyndaquil</button>
        <button onClick={() => {
          this.setState(prevState => ({...prevState, playerPick: 'chikorita'}));
          this.getRivalPick()
          }}>Chikorita</button>
          <button onClick={() => {
            this.setState(prevState => ({...prevState, round: prevState.round + 1}), () => {this.checkRound()});
            this.fight()
          }}>
            Battle
          </button>
          { winner }
      </>
    );
  }
}