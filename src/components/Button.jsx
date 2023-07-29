
import "./Button.css"
const Button = ({ closeModal, onSubmit }) => {
  return (
    <div onClick={() => closeModal ? closeModal() : onSubmit()} className="btn-div">
      <a href="#">
        <div className="my-button">
          <p>
            {closeModal ? "Play Again" : "Play"}
          </p>
        </div>
      </a>
    </div>

  )
}

export default Button