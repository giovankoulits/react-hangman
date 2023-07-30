
import "./keyboard.css"
import { nanoid } from "nanoid"

const Keyboard = ({ handleClick }) => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

  return (
    <div className="board">{letters.map(letter => (<div onClick={e => { handleClick(e); }} className="key" key={nanoid()} > <h2>{letter}</h2> </div>))
    }</div>

  )
}

export default Keyboard