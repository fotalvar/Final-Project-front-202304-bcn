import { useNavigate } from "react-router-dom";
import TeamForm from "../../components/TeamForm/TeamForm";
import useTeams from "../../hooks/useTeams/useTeams";
import { addTeamActionCreator } from "../../store/teams/teamsSlice";
import { TeamsStructure } from "../../store/teams/types";
import AddPageStyled from "./AddPageStyled";
import paths from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";

const AddPage = (): React.ReactElement => {
  const { addTeam } = useTeams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (teamData: Partial<TeamsStructure>) => {
    const newTeam = await addTeam(teamData);

    dispatch(addTeamActionCreator(newTeam));

    navigate(paths.home);
  };

  return (
    <AddPageStyled>
      <h1 className="add-team-title">Create Team</h1>
      <TeamForm onSubmit={onSubmit} />
    </AddPageStyled>
  );
};

export default AddPage;
