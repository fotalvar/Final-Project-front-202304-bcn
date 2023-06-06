import { useAppDispatch, useAppSelector } from "../../store";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, isError } = useAppSelector((store) => store.uiStore);
  const handleCloseModal = () => {
    dispatch(hideErrorActionCreator());
  };
  return (
    <ModalStyled className={`modal modal${isError ? "__error" : "__ok"}`}>
      <i className={`modal__icon modal__icon${isError ? "__error" : "__ok"}`} />
      <span className="modal__message">{errorMessage}</span>
      <Button
        className="modal__button"
        text="close"
        actionOnClick={handleCloseModal}
      />
    </ModalStyled>
  );
};

export default Modal;
