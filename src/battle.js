import React, { useState, useEffect } from 'react';
import totodileProf from './Assets/profile-totodile.png'
import cyndaquilProf from './Assets/profile-cyndaquil.png'
import chikoritaProf from './Assets/profile-chikorita.png'

export const Battle = props => {

const [ playerPick, setPlayerPick] = useState('')
const [ rivalPick, setRivalPick] = useState('')
const [ playerScore, setPlayerScore ] = useState(0)
const [ rivalScore, setRivalScore ] = useState(0)
const [ round, setRound ] = useState(0)
const [ winner, setWinner ] = useState('')
const [ button, setButton ] = useState('')
const [ battleText, setBattleText ] = useState('')

useEffect(() => {
  checkRound()
}, [round])

const restart = () => {
  setRound(0)
  setWinner('')
  setBattleText('')
  setButton('')
  setPlayerScore(0)
  setRivalScore(0)
}

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
  const choice = ['Totodile', 'Chikorita', 'Cyndaquil']
  setRivalPick(choice[Math.floor(Math.random()*3)])
}

const fight = () => {
  if (playerPick === rivalPick) {
    setBattleText(`Your ${playerPick} and Rival's ${rivalPick} were evenly matched!`)
  }
  else if ((playerPick === 'Totodile' && rivalPick === 'Cyndaquil') ||
          (playerPick === 'Chikorita' && rivalPick === 'Totodile')  ||
          (playerPick === 'Cyndaquil' && rivalPick === 'Chikorita')){
            setPlayerScore(playerScore + 1)
            setBattleText(`Your ${playerPick} was super effective against Rival's ${rivalPick}!`)
          }
  else{
    setRivalScore(rivalScore + 1)
    setBattleText(`Rival's ${rivalPick} was super effective against your ${playerPick}!`)
  }
}
    return (
      <>
         <h1>Choose your Pokemon!</h1>
        <h3>Score: { playerScore } - { rivalScore }</h3>
        <div onClick={() => {
          setPlayerPick('Totodile');
          getRivalPick()
          }}><img src={totodileProf} alt='Totodile Profile Picture'/></div>
        <div onClick={() => {
          setPlayerPick('Cyndaquil');
          getRivalPick()
          }}><img src={cyndaquilProf} alt='Cyndaquil Profile Picture'/></div>
        <div onClick={() => {
          setPlayerPick('Chikorita');
          getRivalPick()
          }}><img src={chikoritaProf} alt='Chikorita Profile Picture'/></div>
          { round < 5 ? (<button disabled={ button } onClick={() => {
            setRound(round + 1) 
            fight()
          }}>
            Battle
          </button> ) : (<button onClick={() => {
            restart()
          }}>Restart the Battle</button>)}
          { round < 5 ? ( battleText ) : ( winner ) } 
      </>
    );
}

export default Battle