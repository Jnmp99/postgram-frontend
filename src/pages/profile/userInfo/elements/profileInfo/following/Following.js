import { Link } from "react-router-dom";

const Following = (props) => {
  const { followers, following } = props;
  return (
    <div className="profileSocialInfo">
      <Link to="followers">
        <span>Followers: {followers}</span>
      </Link>
      <Link to="following">
        <span>Following: {following}</span>
      </Link>
    </div>
  );
};

export default Following;
