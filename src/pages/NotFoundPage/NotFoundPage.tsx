import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="error">
      <img src="../images/404.svg" alt="404 error" className="error__image" />
      <p className="error__message">Traveler... there`s nothing here.</p>
    </NotFoundPageStyled>
  );
};
export default NotFoundPage;
