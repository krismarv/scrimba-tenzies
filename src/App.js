import './App.css';
import React from "react"
import Basics from './components/Basics';
import Dice from './components/Dice';
import Win from './components/Win'

function App() {
  // STATES
  const [dice, setDice] = React.useState(diceInitial())
  const [win, setWin] = React.useState(false)

  //initialize dice state
  function diceInitial(){
    let arr = []
    for (let i=0; i<10; i++) {
      let obj = {};
      obj.id = i
      obj.number = Math.floor(Math.random()*6+1);
      obj.stopped = false
      arr.push(obj)
    }
    return arr
  }
  // FUNCTIONS  
  function hold(event) {
    setDice((prevDice)=>{
      return prevDice.map((item) => {
        if (item.id===parseInt(event.target.id)) {
          return {...item, stopped:!item.stopped}
        } else 
        {
          return {...item}
        }
      })
    })
  }

  function roll(){
    setDice((dice)=>{
      return dice.map((item)=>{
        if (!item.stopped) {
          item.number = Math.floor(Math.random()*6+1);
        }
        return item
      })
    })
  }

  // WIN
  React.useEffect(()=>{
    let winner = dice.every(item=>item.number===dice[0].number&&item.stopped)
    if (winner===true) {
      setWin(true);
    }
  }, [dice])

  function newGame() {
    setWin(false);
    setDice(diceInitial())
  }
  return (
    <div className='canvas'>
      <Win 
        win={win}
        newGame={newGame}
      />
      <Basics />
      <Dice
        dice={dice}
        hold={hold} />
      <button onClick={roll}>Roll the dice</button>
    </div>
  );
}

export default App;
