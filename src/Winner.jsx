const Winner = ({value,reset_game}) => {
    const resetGame = () =>{
reset_game()

    }

    return (
        <div className="winner">
        <h1> {value} We have a winner </h1>
        <button onClick={resetGame}>Reset Game</button>
        
        </div>
        


    )
    }
export default Winner

