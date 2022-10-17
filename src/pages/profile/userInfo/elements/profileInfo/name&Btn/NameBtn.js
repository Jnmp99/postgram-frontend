import FollowBtn from "./FollowBtn";
import "../../../../../../styles/profile/userInfo/profileInfoBtn.scss";

const NameBtn = (props) => {
  const { name, username } = props;
  return (
    <div className="userNamesInfoBtn">
      <div className="userNamesInfo">
        <h2>{name}</h2>
        <span>@{username}</span>
      </div>
      <FollowBtn />
    </div>
  );
};

export default NameBtn;
