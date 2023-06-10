import Form from "../../components/Form/Form";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  return (
    <AddPageStyled>
      <h1 className="add-team__title">Create Team</h1>
      <Form />
    </AddPageStyled>
  );
};

export default AddPage;
