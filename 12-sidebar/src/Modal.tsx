import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import type { ReactElement } from 'react';

const Modal = (): ReactElement => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
