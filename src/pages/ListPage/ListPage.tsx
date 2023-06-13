import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import List from "../../components/List/List";
import { useEffect } from "react";
import { loadTeamsActionCreator } from "../../store/teams/teamsSlice";
import useTeams from "../../hooks/useTeams/useTeams";
import { useNavigate } from "react-router-dom";
import paths from "../../routers/paths/paths";

const ListPage = (): React.ReactElement => {
  const { getTeams } = useTeams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addTeamOnClick = (): void => {
    navigate(paths.add);
  };

  useEffect(() => {
    (async () => {
      const teams = await getTeams();

      if (teams) {
        dispatch(loadTeamsActionCreator(teams));
        for (let i = 0; i < 2; i++) {
          const preconnectElement = await document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = teams[i].image;

          const parent = document.head;
          const firstChild = document.head.firstChild;
          parent.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [dispatch, getTeams]);

  const { name } = useAppSelector((state) => state.userStore);
  const team = useAppSelector((state) => state.teamsStore);

  return (
    <ListPageStyled className="teams-list">
      <h1 className="teams-list__title">{name}`s Teams</h1>
      <section className="teams-list__filter">
        <select className="teams-list__rankList">
          <option defaultValue="ranks">All rank levels</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="s">S</option>
          <option value="ss">SS</option>
        </select>
        <button className="teams-list__addButton" onClick={addTeamOnClick}>
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
