import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import css from './ModalLogout.module.scss';
import { resetState } from 'redux/global/global-action';
import { toast } from 'react-toastify';

export const ModalLogout = ({ isOpen, onClose, onLogout }) => {
  const dispatch = useDispatch();

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleLogoutClick = () => {
    try {
      dispatch(resetState());
      onLogout();
      toast.success('You have been logged out');
      onClose();
    } catch (error) {
      dispatch(resetState());
      onClose();
      toast.error('Something went wrong');
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div onClick={handleOverlayClick} className={css.modalMain}>
          <div className={css.modalContainer}>
            <p className={css.question}>Are you sure, you want to log out?</p>
            <div className={css.wrapperBtn}>
              <button
                className={css.modalBtn}
                type="button"
                onClick={handleModalClose}
                title="logout"
              >
                No
              </button>
              <button
                className={css.modalBtn}
                type="button"
                onClick={handleLogoutClick}
              >
                Yes
              </button>
            </div>
            <button
              className={css.modalBtn && css.xIcon}
              onClick={handleModalClose}
              title="cancel"
            ></button>
          </div>
        </div>
      )}
    </>
  );
};
