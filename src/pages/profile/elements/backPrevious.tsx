import { Link } from "react-router-dom";
import BackIcon from "../../../resources/profile/BackIcon";

interface mainProps {
  backRoute: string | undefined;
}

const BackToPrevious = (props: mainProps) => {
  const { backRoute } = props;
  return (
    <Link
      className="profileBackBtnContainer"
      to={`../${backRoute !== undefined ? backRoute : ""}`}
    >
      <BackIcon viewBox="0 0 50 50" fill="white" />
    </Link>
  );
};

export default BackToPrevious;
