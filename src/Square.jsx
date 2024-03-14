import Circle from "./Circle"
import Cross from "./Cross"

const Square = ({position, value, takeTurn}) => {
const checkTurn = ()=>{
   if(value == "EMPTY")
   takeTurn(position)
}


    return (
        <div className="Square" onClick={checkTurn}>
          { value == "CIRCLE" && <Circle/>}
            {value == "CROSS"&& <Cross/>}
        </div>

    )

}

export default Square

