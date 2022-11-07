import "../../../styles/home/rightStyles.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { reduxIF } from "../../../interfaces";

const Right = () => {
  const userData = useSelector((state: reduxIF) => state.userData.value);
  const { name, username, profilepic } = userData;

  return (
    <div className="rightSide">
      <div className="rightContentContainer">
        <div className="asideContainer"></div>
      </div>

      <Link to={`../../${username}`}>
        <div className="rightUserContainer">
          <div className="rightUserImgContainer">
            <img src={profilepic} alt="profile"></img>
          </div>
          <div className="rightUserNamesContainer">
            <span className="rightUserName">{name}</span>
            <span className="rightUserUsername">@{username}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Right;
