import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./Modal.styled";

const portalModal = document.querySelector("#modal-root");

const Modal = ({ onClose }) => {
  // const onSubmitContact = (e) => {
  //   e.preventDefault();
  // };

  const onCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onCloseKey = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onCloseKey);
    return () => window.removeEventListener("keydown", onCloseKey);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <div
        style={{ backgroundColor: "white", width: "200px", height: "100px" }}
      >
        Модалка
      </div>
    </Overlay>,
    portalModal
  );
};

export default Modal;
