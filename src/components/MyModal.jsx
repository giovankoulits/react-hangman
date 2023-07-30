import Modal from 'react-modal';
import './Modal.css';
import Button from './Button';

const MyModal = ({ word, end, closeModal, win, loss }) => {
  //Modal Styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      animation: 'fadeIn 2s ease-in',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: "0 5px 25px -5px rgb(77, 141, 193)",
      border: "1px rgb(106, 188, 255) solid",
      backgroundColor: " #121212"
    },
  };

  const winOrLose = win ? "Congrats! \n You Won 🥳" : "Oh no! \n You Lost 😪"
  const revealWord = word.length && word.join("")
  return (
    <Modal
      style={customStyles}
      isOpen={end}
      contentLabel='Example Modal'
    >
      <div className='modal-container '>
        <h1 className='modal-h1'>  {winOrLose}</h1>
        <h2 className='modal-h2'>
          {!win && `The Word you were looking for is ${revealWord}`}
        </h2>
        <Button closeModal={closeModal} />
      </div>
    </Modal>
  );
};

export default MyModal;
