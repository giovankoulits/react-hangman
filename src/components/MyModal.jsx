import Modal from 'react-modal';
import './Modal.css';
import Button from './Button';
import { useState } from 'react';
const MyModal = ({ open, rePlay }) => {
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
      /*       animation: 'fade-in 1s ease', */
    },
  };

  return (
    <Modal
      style={customStyles}
      isOpen={open}
      contentLabel='Example Modal'
    >
      <div className='modal-container '>
        <h1 className='modal-h1'>Congrats!</h1>
        <h2 className='modal-h2'>
          You Won 🥳
        </h2>
        <Button closeModal={rePlay} />
      </div>
    </Modal>
  );
};

export default MyModal;
