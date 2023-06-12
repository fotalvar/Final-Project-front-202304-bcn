import { useState } from "react";
import { TeamsStructure } from "../../store/teams/types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

export interface FormProps {
  onSubmit: (teamData: Partial<TeamsStructure>) => void;
}

const Form = ({ onSubmit }: FormProps): React.ReactElement => {
  const initialFormState: Partial<TeamsStructure> = {
    name: "",
    description: "",
    character1: "",
    character2: "",
    character3: "",
    character4: "",
    rating: "",
    type: "",
    image: "",
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

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(teamData);
    setTeamData(initialFormState);
  };

  const isDisabled =
    !teamData.name ||
    !teamData.description ||
    !teamData.character1 ||
    !teamData.character2 ||
    !teamData.character3 ||
    !teamData.character4 ||
    !teamData.rating ||
    !teamData.type ||
    !teamData.image;

  return (
    <FormStyled className="form" onSubmit={handleOnSubmit} autoComplete="off">
      <label className="form__label" htmlFor="name">
        Teams name
        <input
          className="form__name"
          id="name"
          type="text"
          value={teamData.name}
          onChange={onChangeForm}
          required={true}
          maxLength={20}
        />
      </label>

      <label className="form__label" htmlFor="description">
        Description
        <textarea
          className="form__description"
          value={teamData.description}
          onChange={onChangeForm}
          id="description"
          required={true}
          maxLength={300}
        ></textarea>
      </label>

      <label className="form__label" htmlFor="character1">
        Character 1
        <select
          name="character1"
          id="character1"
          className="form__character"
          onChange={onChangeForm}
        >
          <option defaultValue="character">First character...</option>
          <option value="Venti">Venti</option>
          <option value="Cyno">Cyno</option>
          <option value="Diluc">Diluc</option>
          <option value="Barbara">Barbara</option>
          <option value="Jean">Jean</option>
          <option value="Keqing">Keqing</option>
          <option value="Klee">Klee</option>
          <option value="Mona">Mona</option>
          <option value="Qiqi">Qiqi</option>
          <option value="Razor">Razor</option>
        </select>
      </label>

      <label className="form__label" htmlFor="character2">
        Character 2
        <select
          name="character2"
          id="character2"
          className="form__character"
          onChange={onChangeForm}
        >
          <option defaultValue="character">Second character...</option>
          <option value="Venti">Venti</option>
          <option value="Cyno">Cyno</option>
          <option value="Diluc">Diluc</option>
          <option value="Barbara">Barbara</option>
          <option value="Jean">Jean</option>
          <option value="Keqing">Keqing</option>
          <option value="Klee">Klee</option>
          <option value="Mona">Mona</option>
          <option value="Qiqi">Qiqi</option>
          <option value="Razor">Razor</option>
        </select>
      </label>

      <label className="form__label" htmlFor="character3">
        Character 3
        <select
          name="character3"
          id="character3"
          className="form__character"
          onChange={onChangeForm}
        >
          <option defaultValue="character">Third character...</option>
          <option value="Venti">Venti</option>
          <option value="Cyno">Cyno</option>
          <option value="Diluc">Diluc</option>
          <option value="Barbara">Barbara</option>
          <option value="Jean">Jean</option>
          <option value="Keqing">Keqing</option>
          <option value="Klee">Klee</option>
          <option value="Mona">Mona</option>
          <option value="Qiqi">Qiqi</option>
          <option value="Razor">Razor</option>
        </select>
      </label>

      <label className="form__label" htmlFor="character4">
        Character 4
        <select
          name="character4"
          id="character4"
          className="form__character"
          onChange={onChangeForm}
        >
          <option defaultValue="character">Fourth character...</option>
          <option value="Venti">Venti</option>
          <option value="Cyno">Cyno</option>
          <option value="Diluc">Diluc</option>
          <option value="Barbara">Barbara</option>
          <option value="Jean">Jean</option>
          <option value="Keqing">Keqing</option>
          <option value="Klee">Klee</option>
          <option value="Mona">Mona</option>
          <option value="Qiqi">Qiqi</option>
          <option value="Razor">Razor</option>
        </select>
      </label>

      <label className="form__label" htmlFor="rating">
        Team Rating
        <select
          className="form__input"
          onChange={onChangeForm}
          required={true}
          id="rating"
        >
          <option defaultValue="rating">Rating level...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="S">S</option>
          <option value="SS">SS</option>
          <option value="SS+">SS+</option>
        </select>
      </label>

      <label className="form__label" htmlFor="type">
        Team Type
        <select
          className="form__input"
          onChange={onChangeForm}
          required={true}
          id="type"
        >
          <option defaultValue="type">Type...</option>
          <option value="Explorer">Explorer</option>
          <option value="Fighter">Fighter</option>
          <option value="Suport">Suport</option>
          <option value="Mage">Mage</option>
          <option value="Tank">Tank</option>
          <option value="Assassin">Assassin</option>
          <option value="Healer">Healer</option>
          <option value="Archer">Archer</option>
        </select>
      </label>

      <label className="form__label" htmlFor="image">
        Team Image
        <input
          id="image"
          className="form__image form__input"
          value={teamData.image}
          onChange={onChangeForm}
          placeholder="https://..."
          type="url"
          required={true}
        />
        {teamData.image && (
          <img
            className="form__thumbnail"
            alt="Team thumbnail"
            src={teamData.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/images/no-image.svg";
            }}
          />
        )}
      </label>

      <Button
        className="form__button"
        text="create team"
        type="submit"
        isDisabled={isDisabled}
      />
    </FormStyled>
  );
};

export default Form;
