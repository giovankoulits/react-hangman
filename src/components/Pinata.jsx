import "./pinata.css"

const Pinata = () => {
  return (
    <div className="container">
      <div className="hangman-container">
        <div className="gallow"><div className="plank"></div></div>
        <div className="head-container">
          <div className="head"></div>
        </div>
        <div className="body">
          <div className="handL"></div>
          <div className="torso"></div>
          <div className="handR"></div>
        </div>
        <div className="legs">
          <div className="legL"></div>
          <div className="legR"></div>
        </div>
      </div>
    </div>

  )
}

export default Pinata