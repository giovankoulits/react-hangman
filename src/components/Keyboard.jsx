
import "./keyboard.css"

const Keyboard = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

  return (
    <div className="board">{letters.map(letter => (<div className="key"> <h1>{letter}</h1> </div>))}</div>

  )
}

export default Keyboard