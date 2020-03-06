import React, { useState, useEffect } from 'react';

export const Battle = props => {

const [ playerPick, setPlayerPick] = useState('')
const [ rivalPick, setRivalPick] = useState('')
const [ playerScore, setPlayerScore ] = useState(0)
const [ rivalScore, setRivalScore ] = useState(0)
const [ round, setRound ] = useState(0)
const [ winner, setWinner ] = useState('')
const [ button, setButton ] = useState('')

useEffect(() => {
  checkRound()
}, [round])

const checkRound = () => {
  if (round === 5) {
    if (playerScore === rivalScore) {
      setWinner('You and your rival battle to a stale mate, battle again?')
      setButton('disabled')
    }
    else if (playerScore > rivalScore) {
      setWinner('You defeated your rival in battle, battle again?')
      setButton('disabled')
    }
    else {
      setWinner('You were defeated by your rival in battle, battle again?')
      setButton('disabled')
    }
  }
}

const getRivalPick = () => {
  const choice = ['totodile', 'chikorita', 'cyndaquil']
  setRivalPick(choice[Math.floor(Math.random()*3)])
}

const fight = () => {
  if (playerPick === rivalPick) {
    console.log('Draw');
  }
  else if ((playerPick === 'totodile' && rivalPick === 'cyndaquil') ||
          (playerPick === 'chikorita' && rivalPick === 'totodile')  ||
          (playerPick === 'cyndaquil' && rivalPick === 'chikorita')){
      setPlayerScore(playerScore + 1)

  }
  else{
    setRivalScore(rivalScore + 1)
  }
}
    return (
      <>
         <h1>Choose your Pokemon!</h1>
        Player Score: { playerScore } Rival Score: { rivalScore }
        <button onClick={() => {
          setPlayerPick('totodile');
          getRivalPick()
          }}>Totodile</button>
        <button onClick={() => {
          setPlayerPick('cyndaquil');
          getRivalPick()
          }}>Cyndaquil</button>
        <button onClick={() => {
          setPlayerPick('chikorita');
          getRivalPick()
          }}>Chikorita</button>
          <button disabled={ button } onClick={() => {
            setRound(round + 1); 
            fight()
          }}>
            Battle
          </button>
          { winner }
      </>
    );
}

export default Battle