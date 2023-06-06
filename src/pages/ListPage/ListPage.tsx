import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import List from "../../components/List/List";
import useApi from "../../hooks/useTeams/useTeams";
import { useEffect } from "react";
import { loadTeamsActionCreator } from "../../store/teams/teamsSlice";

const ListPage = (): React.ReactElement => {
  const { name } = useAppSelector((state) => state.userStore);
  const team = useAppSelector((state) => state.teamsStore);

  const { getTeams } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const teams = await getTeams();
      dispatch(loadTeamsActionCreator(teams));
    })();
  }, [dispatch, getTeams]);

  return (
    <ListPageStyled className="teamsList">
      <h1 className="teamsList__title">{name}`s Teams</h1>
      <section className="teamsList__filter">
        <select className="teamsList__rankList">
          <option defaultValue="ranks">All rank levels</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="s">S</option>
          <option value="ss">SS</option>
        </select>
        <button className="teamsList__addButton">
          {" "}
          <img
            src="../images/icons/add.svg"
            alt="Add icon"
            width="23"
            height="23"
          />
        </button>
      </section>
      <List teamProps={team.teams} />
    </ListPageStyled>
  );
};

export default ListPage;
