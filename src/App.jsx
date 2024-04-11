import { useState } from "react"
import Square from "./Square"
import Winner from "./Winner"


const CIRCLE = 'CIRCLE'
const CROSS = 'CROSS'
const EMPTY = 'EMPTY'


const App = () => {
  const [state,setState] = useState({
    player :CIRCLE,
    positions : [
    EMPTY,EMPTY,EMPTY, 
    EMPTY,EMPTY,EMPTY,
    EMPTY,EMPTY,EMPTY
  ],
  Winner:false
})

const resetGame =() =>{
 setState ({
    player :CIRCLE,
    positions : [
    EMPTY,EMPTY,EMPTY, 
    EMPTY,EMPTY,EMPTY,
    EMPTY,EMPTY,EMPTY
  ],
  Winner:false

})
  }
  
  const detectWinner = (myGrid) =>{
    if(myGrid[0]==myGrid[1] && myGrid[1] == myGrid[2]) {
      if (myGrid[0]== EMPTY)
      return false
      return myGrid[0]
    }
    return false;


  }

const takeTurn= (pos)=>{
  let positions = [...state.positions]
  positions [pos] = state.player

  
  
  setState({
    player : state.player == CIRCLE? CROSS : CIRCLE,
    positions,
    Winner : detectWinner(positions)


  })
}

return (
    <>
  <div className="grid">
    <Square position={0} value={state.positions[0]} takeTurn={takeTurn}/>
    <Square position={1} value={state.positions[1]}takeTurn={takeTurn}/>
    <Square position={2} value={state.positions[2]}takeTurn={takeTurn}/>
    <Square position={3} value={state.positions[3]}takeTurn={takeTurn}/>
    <Square position={4} value={state.positions[4]}takeTurn={takeTurn}/>
    <Square position={5} value={state.positions[5]}takeTurn={takeTurn}/>
    <Square position={6} value={state.positions[6]}takeTurn={takeTurn}/>
    <Square position={7} value={state.positions[7]}takeTurn={takeTurn}/>
    <Square position={8} value={state.positions[8]}takeTurn={takeTurn}/>
  </div>
  {state.Winner && <Winner value= {state.Winner} reset_game = {resetGame}/>}
  </>
)
}

export default App