import ListPageStyled from "./ListPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import List from "../../components/List/List";
import { useEffect, useState } from "react";
import {
  loadMoreActionCreator,
  loadTeamsActionCreator,
} from "../../store/teams/teamsSlice";
import useTeams from "../../hooks/useTeams/useTeams";
import { useNavigate } from "react-router-dom";
import paths from "../../routers/paths/paths";
import LoadMore from "../../components/LoadMore/LoadMore";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getTeams } = useTeams();
  const { teams } = useAppSelector((state) => state.teamsStore);
  const [totalCount, settotalCount] = useState(0);

  const navigate = useNavigate();

  const addTeamOnClick = (): void => {
    navigate(paths.add);
  };

  const handleLoadMore = () => {
    dispatch(loadMoreActionCreator());
  };

  useEffect(() => {
    (async () => {
      const response = await getTeams();

      if (response) {
        const { totalCount, teams } = response;

        settotalCount(totalCount);

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

  const team = useAppSelector((state) => state.teamsStore);

  return (
    <ListPageStyled className="teams-list">
      <h1 className="teams-list__title">All Teams</h1>
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

      {teams.length !== totalCount && <LoadMore onClick={handleLoadMore} />}
    </ListPageStyled>
  );
};

export default ListPage;
