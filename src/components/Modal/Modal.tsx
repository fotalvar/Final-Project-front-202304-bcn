import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = () => {
  return (
    <ModalStyled className="modal modal__error">
      <i className="modal__icon modal__icon__error" />
      <span className="modal__message">Team created</span>
      <Button className="modal__button" text="close" />
    </ModalStyled>
  );
};

export default Modal;
