import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

// import css from './ModalLogout.module.scss';
// import style from '../../common/utils/vars.scss';
import { resetState } from 'redux/global/global-action';
import { toast } from 'react-toastify';
import closeIcon from '../../images/close_btn.svg';

function ModalLogout({ isOpen, onClose }) {
  const dispatch = useDispatch();

  // const handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     onClose();
  //   }
  // };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleLogoutClick = () => {
    dispatch(resetState());
    onClose();
    toast.success('You have been logged out');
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div onClick={handleOverlayClick}>
          <p>Are you sure, you want to log out?</p>
          <button type="button" onClick={onClose}>
            No
          </button>
          <button type="button" onClick={handleLogoutClick}>
            Yes
          </button>
          <button onClick={onClose}>
            <img src={closeIcon} width={12} height={12} alt="close"></img>
          </button>
        </div>
      )}
    </>
  );
}

export default ModalLogout;
