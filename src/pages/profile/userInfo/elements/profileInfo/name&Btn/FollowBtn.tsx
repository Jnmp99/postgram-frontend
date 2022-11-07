import "../../../../../../styles/profile/userInfo/profileFollowBtn.scss";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { reduxIF } from "interfaces";

const FollowBtn = () => {
  const [btnContent, setBtnContent] = useState("Follow");
  const [btnClassName, setBtnClassName] = useState("fBtn");

  const param = useParams().username;
  const localUser = useSelector(
    (state: reduxIF) => state.userData.value.username
  );

  useEffect(() => {
    if (param === localUser) {
      setBtnContent("Edit profile");
      setBtnClassName("editBtn");
      return;
    }
  }, [param, localUser]);

  return (
    <div className="userNameBtn">
      <div className="followBtn">
        <button className={btnClassName}>{btnContent}</button>
      </div>
    </div>
  );
};

export default FollowBtn;
