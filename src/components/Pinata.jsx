import "./pinata.css"

const Pinata = ({ guesses }) => {
  console.log(guesses);
  return (
    <div className="container">
      <div className="hangman-container">
        <div className="gallow"><div className="plank"></div></div>
        <div className="head-container">
          <div style={{ opacity: `${guesses.length ? "1" : "0"}` }} className="head"></div>
        </div>
        <div className="body">
          <div style={{ borderBottom: `${guesses.length >= 4 ? "5px solid white" : "none"}` }} className="handL"></div>
          <div style={{ borderRight: `${guesses.length >= 2 ? "5px solid white" : "none"}` }} className="torso"></div>
          <div style={{ borderBottom: `${guesses.length >= 3 ? "5px solid white" : "none"}` }} className="handR"></div>
        </div>
        <div className="legs">
          <div style={{ borderRight: `${guesses.length >= 5 ? "5px solid white" : "none"}`, left: `${guesses.length <= 5 ? "-13px" : "-11px"}` }} className="legL"></div>
          <div style={{ borderRight: `${guesses.length >= 6 ? "5px solid white" : "none"}` }} className="legR"></div>
        </div>
      </div>
    </div>

  )
}

export default Pinata