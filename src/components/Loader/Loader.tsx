import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader">
        <img
          src="../favicon.svg"
          alt="Teams impact loader icon"
          width={50}
          height={50}
          className="loader__icon"
        />
      </span>
      ;
    </LoaderStyled>
  );
};

export default Loader;
