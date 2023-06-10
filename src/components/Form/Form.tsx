import { useState } from "react";
import { TeamsStructure } from "../../store/teams/types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  const initialFormState: Partial<TeamsStructure> = {
    name: "",
    description: "",
    character1: "",
    character2: "",
    character3: "",
    character4: "",
    rating: "",
    type: "",
    bgimage: "",
  };

  const [teamData, setTeamData] = useState(initialFormState);

  const onChangeForm = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTeamData({
      ...teamData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <FormStyled className="form">
      <label className="form__label" htmlFor="name">
        Teams name
        <input
          className="form__name"
          id="name"
          type="text"
          value={teamData.name}
          onChange={onChangeForm}
        ></input>
      </label>
      <label className="form__label">
        Description
        <textarea
          className="form__description"
          value={teamData.description}
          onChange={onChangeForm}
        ></textarea>
      </label>
      <label className="form__label">
        Characters
        <select className="form__character" onChange={onChangeForm}>
          <option value="character1">Character 1</option>
          <option value="character2">Character 2</option>
          <option value="character3">Character 3</option>
          <option value="character4">Character 4</option>
        </select>
        <select className="form__character" onChange={onChangeForm}>
          <option value="character1">Character 1</option>
          <option value="character2">Character 2</option>
          <option value="character3">Character 3</option>
          <option value="character4">Character 4</option>
        </select>
        <select className="form__character" onChange={onChangeForm}>
          <option value="character1">Character 1</option>
          <option value="character2">Character 2</option>
          <option value="character3">Character 3</option>
          <option value="character4">Character 4</option>
        </select>
        <select className="form__character" onChange={onChangeForm}>
          <option value="character1">Character 1</option>
          <option value="character2">Character 2</option>
          <option value="character3">Character 3</option>
          <option value="character4">Character 4</option>
        </select>
      </label>
      <label className="form__label">
        Team Rating
        <select className="form__input" onChange={onChangeForm}>
          <option value="rating1">Rating 1</option>
          <option value="rating2">Rating 2</option>
          <option value="rating3">Rating 3</option>
        </select>
      </label>
      <label className="form__label">
        Team Type
        <select className="form__input" onChange={onChangeForm}>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="type3">Type 3</option>
        </select>
      </label>
      <label className="form__label">
        Team Image
        <input
          className="form__image form__input"
          value={teamData.bgimage}
          onChange={onChangeForm}
          placeholder="https://..."
        ></input>
      </label>
      <Button className="form__button" text="create team" type="submit" />
    </FormStyled>
  );
};

export default Form;
