import './App.css';
import React from "react"
import Basics from './components/Basics';
import Dice from './components/Dice'

function App() {
  // STATES
  const [dice, setDice] = React.useState(diceInitial())

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

  return (
    <div className='canvas'>
      <Basics />
      <Dice
        dice={dice}
        hold={hold} />
      <button onClick={roll}>Roll the dice</button>
    </div>
  );
}

export default App;
