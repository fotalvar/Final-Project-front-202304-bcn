import ListPageStyled from "./ListPageStyled";
import { useAppSelector } from "../../store";

const ListPage = (): React.ReactElement => {
  const userName = useAppSelector((state) => state.userStore.name);

  return (
    <ListPageStyled className="teamsList">
      <h1 className="teamsList__title">{userName}`s teams</h1>
      <section className="teamsList__filter">
        <select className="teamsList__rankList">
          <option selected>All rank levels</option>
          <option value="a">A</option>
          <option value="a">B</option>
          <option value="a">C</option>
          <option value="a">D</option>
          <option value="a">S</option>
          <option value="a">SS</option>
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
    </ListPageStyled>
  );
};

export default ListPage;
