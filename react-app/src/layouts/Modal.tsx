import { useEffect } from "react";

interface ModalStyle {
  height?: number;
  width?: number;
  backgroundColor?: string;
}

type Props = {
  children: any;
  modalOpen: boolean;
  closeModal: Function;
  modalStyle?: ModalStyle;
};

const Modal = ({ children, modalOpen, closeModal, modalStyle }: Props) => {
  const ctrlOverflow = () => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Function to close modal on backdrop press
  const backdropClose = (e: any) => {
    if (modalOpen) {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    }
  };

  useEffect(() => {
    ctrlOverflow();
  }, [modalOpen]);

  return (
    <div
      className={`modal ${modalOpen ? "active" : "inactive"}`}
      onClick={e => backdropClose(e)}
    >
      <div
        className={`modal-content ${modalOpen ? "active" : "inactive"}`}
        style={modalStyle && { ...modalStyle }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
