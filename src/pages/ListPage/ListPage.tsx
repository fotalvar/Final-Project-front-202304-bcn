import ListPageStyled from "./ListPageStyled";
import { useAppSelector } from "../../store";
import List from "../../components/List/List";
import { teamMock } from "../../mocks/teamsMocks/teamsMocks";

const ListPage = (): React.ReactElement => {
  const userName = useAppSelector((state) => state.userStore.name);

  return (
    <ListPageStyled className="teamsList">
      <h1 className="teamsList__title">{userName}`s Teams</h1>
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
      <List Teams={teamMock} />
    </ListPageStyled>
  );
};

export default ListPage;
