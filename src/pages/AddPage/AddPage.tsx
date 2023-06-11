import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useTeams from "../../hooks/useTeams/useTeams";
import { addTeamActionCreator } from "../../store/teams/teamsSlice";
import { TeamsStructure } from "../../store/teams/types";
import AddPageStyled from "./AddPageStyled";
import paths from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import { showErrorActionCreator } from "../../store/ui/uiSlice";

const AddPage = (): React.ReactElement => {
  const { addTeam } = useTeams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (teamData: Partial<TeamsStructure>) => {
    const newTeam = await addTeam(teamData);

    dispatch(addTeamActionCreator(newTeam));

    navigate(paths.home);
    dispatch(
      showErrorActionCreator({
        errorMessage: "Team Created",
        isError: false,
      })
    );
  };
  return (
    <AddPageStyled>
      <h1 className="add-team__title">Create Team</h1>
      <Form onSubmit={onSubmit} />
    </AddPageStyled>
  );
};

export default AddPage;
