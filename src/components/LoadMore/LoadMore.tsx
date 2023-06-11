import Button from "../Button/Button";
interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps): React.ReactElement => {
  return (
    <Button
      text="load more"
      actionOnClick={onClick}
      className="load-more__button"
    />
  );
};

export default LoadMore;
