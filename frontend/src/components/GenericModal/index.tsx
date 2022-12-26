import React from 'react';
import * as S from './index.style';

export interface GenericModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  show?: boolean;
}

const GenericModal = ({
  children,
  handleClose,
  show = false,
}: GenericModalProps) => {
  return (
    <S.Wrapper
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      show={show}
    >
      <div>
        {handleClose && (
          <span onClick={handleClose} className="close-button">
            <i className="fas fa-times"></i>
          </span>
        )}
        {children}
      </div>
    </S.Wrapper>
  );
};

export default GenericModal;