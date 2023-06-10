import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = () => {
  return (
    <FormStyled className="form">
      <label className="form__label" htmlFor="name">
        Teams name
        <input className="form__name" id="name" type="text"></input>
      </label>
      <label className="form__label">
        Description
        <textarea className="form__description"></textarea>
      </label>
      <label className="form__label">
        Characters
        <select className="form__character">
          <option>Character 1</option>
          <option>Character 2</option>
          <option>Character 3</option>
          <option>Character 4</option>
        </select>
        <select className="form__character">
          <option>Character 1</option>
          <option>Character 2</option>
          <option>Character 3</option>
          <option>Character 4</option>
        </select>
        <select className="form__character">
          <option>Character 1</option>
          <option>Character 2</option>
          <option>Character 3</option>
          <option>Character 4</option>
        </select>
        <select className="form__character">
          <option>Character 1</option>
          <option>Character 2</option>
          <option>Character 3</option>
          <option>Character 4</option>
        </select>
      </label>
      <label className="form__label">
        Team Rating
        <select className="form__input">
          <option>Rating 1</option>
          <option>Rating 2</option>
          <option>Rating 3</option>
        </select>
      </label>
      <label className="form__label">
        Team Type
        <select className="form__input">
          <option>Type 1</option>
          <option>Type 2</option>
          <option>Type 3</option>
        </select>
      </label>
      <label className="form__label">
        Team Image
        <input className="form__image form__input"></input>
      </label>
      <Button className="form__button" text="create team" type="submit" />
    </FormStyled>
  );
};

export default Form;
