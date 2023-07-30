
import "./Button.css"
const Button = ({ play, closeModal }) => {
  return (
    <div onClick={() => play ? play() : closeModal()
    } className="btn-div" >
      <a href="#">
        <div className="my-button">
          <p>
            {play ? "Start" : "Go to start"}
          </p>
        </div>
      </a>
    </div >
  )
}

export default Button