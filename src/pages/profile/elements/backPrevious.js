import { Link, useParams } from "react-router-dom";
import BackIcon from "../../../resources/profile/BackIcon";

const BackToPrevious = (props) => {
  const { backRoute } = props;
  return (
    <Link
      className="profileBackBtnContainer"
      to={`../${backRoute !== undefined ? backRoute : ""}`}
    >
      <BackIcon viewBox="0 0 50 50" />
    </Link>
  );
};

export default BackToPrevious;
