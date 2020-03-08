import React, { useState, useEffect } from 'react';
import totodileProf from './Assets/profile-totodile.png'
import cyndaquilProf from './Assets/profile-cyndaquil.png'
import chikoritaProf from './Assets/profile-chikorita.png'
import totodile from './Assets/totodile.png'
import cyndaquil from './Assets/cyndaquil.png'
import chikorita from './Assets/chikorita.png'


export const Battle = props => {

const [ playerPick, setPlayerPick] = useState('')
const [ rivalPick, setRivalPick] = useState('')
const [ playerScore, setPlayerScore ] = useState(0)
const [ rivalScore, setRivalScore ] = useState(0)
const [ round, setRound ] = useState(0)
const [ winner, setWinner ] = useState('')
const [ battleText, setBattleText ] = useState('')
const [ showBattle, setBattle ] = useState(false)

useEffect(() => {
  checkRound()
  // eslint-disable-next-line
}, [round])

const restart = () => {
  setPlayerPick('')
  setRivalPick('')
  setRound(0)
  setWinner('')
  setBattleText('')
  setPlayerScore(0)
  setRivalScore(0)
  setBattle(false)
}

const checkRound = () => {
  if (round === 5 && playerPick) {
    if (playerScore === rivalScore) {
      setWinner('You and your rival battle to a stale mate, battle again?')
    }
    else if (playerScore > rivalScore) {
      setWinner('You defeated your rival in battle, battle again?')
    }
    else {
      setWinner('You were defeated by your rival in battle, battle again?')
    }
  }
}

const getRivalPick = () => {
  const choice = ['Totodile', 'Chikorita', 'Cyndaquil']
  setRivalPick(choice[Math.floor(Math.random()*3)])
}

const fight = () => {
  if ( playerPick ) {
    if (playerPick === rivalPick) {
      setBattleText(`Your ${playerPick} and Rival's ${rivalPick} were evenly matched!`)
    }
    else if ((playerPick === 'Totodile' && rivalPick === 'Cyndaquil') ||
            (playerPick === 'Chikorita' && rivalPick === 'Totodile')  ||
            (playerPick === 'Cyndaquil' && rivalPick === 'Chikorita')){
              setPlayerScore(playerScore + 1)
              setBattleText(`Your ${playerPick} was super effective against your Rival's ${rivalPick}!`)
            }
    else{
      setRivalScore(rivalScore + 1)
      setBattleText(`Your ${playerPick} was weak against your Rival's ${rivalPick}!`)
    }
  } else {
    setWinner('No Pokemon was chosen, restart the battle')
    setRound(5)
  }
}

const battleHelper = () => {
  setPlayerPick('Totodile');
  getRivalPick()
  setBattle(false)
  setBattleText('')
}

    return (
      <>
      <header className='head'>
        <h1>Choose your Pokemon!</h1>
        <h3>Score: { playerScore } - { rivalScore }</h3>
      </header>
      <body className='pokeball'>
          <div className='pokes' onClick={() => {
            battleHelper()
            }}><img src={totodileProf} alt='Totodile'/></div>
          <div className='pokes' onClick={() => {
            battleHelper()
            }}><img src={cyndaquilProf} alt='Cyndaquil'/></div>
          <div className='pokes' onClick={() => {
            battleHelper()
            }}><img src={chikoritaProf} alt='Chikorita'/></div>
      </body>
      <div className='btn-win'>
          { round < 5 ? (<button onClick={() => {
            setRound(round + 1) 
            fight()
            setBattle(true)
          }}>
            Battle
          </button> ) : (<button onClick={() => {
            restart()
          }}>Restart the Battle</button>)}
          { round < 5 ? ( <p>{ battleText }</p> ) : ( <p>{ winner }</p> ) } 
      </div>
      <div>        
      {showBattle ? <footer className='battle-field'>
          <div className='battle1'>
            { playerPick === 'Totodile' ? <img alt='totodile' src={totodile}/>
            : playerPick === 'Chikorita' ? <img alt='chikorita' src={chikorita}/>
            : <img alt='cyndaquil' src={cyndaquil}/>}
          </div>
          <div className='battle2'>
          { rivalPick === 'Totodile' ? <img alt='totodile' src={totodile}/>
            : rivalPick === 'Chikorita' ? <img alt='chikorita' src={chikorita}/>
            : <img alt='cyndaquil' src={cyndaquil}/>}
         </div>
      </footer> : null}
      </div>
      </>
    );
}

export default Battle