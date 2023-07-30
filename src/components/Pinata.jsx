import "./pinata.css"

const Pinata = ({ misses }) => {
  return (
    <div className="container">
      <div className="hangman-container">
        <div className="gallow"><div className="plank"></div></div>
        <div className="head-container">
          <div style={{ opacity: `${misses.length ? "1" : "0"}` }} className="head"></div>
        </div>
        <div className="body">
          <div style={{ borderBottom: `${misses.length >= 4 ? "5px solid white" : "none"}` }} className="handL"></div>
          <div style={{ borderRight: `${misses.length >= 2 ? "5px solid white" : "none"}` }} className="torso"></div>
          <div style={{ borderBottom: `${misses.length >= 3 ? "5px solid white" : "none"}` }} className="handR"></div>
        </div>
        <div className="legs">
          <div style={{ borderRight: `${misses.length >= 5 ? "5px solid white" : "none"}`, left: `${misses.length <= 5 ? "-13px" : "-11px"}` }} className="legL"></div>
          <div style={{ borderRight: `${misses.length >= 6 ? "5px solid white" : "none"}` }} className="legR"></div>
        </div>
      </div>
    </div>

  )
}

export default Pinata