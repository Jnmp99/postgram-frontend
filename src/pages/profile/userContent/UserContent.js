import ProfileHeader from "./ProfileHeader";
import "../../../styles/profile/userContent/userContentStyles.scss";
import { useState } from "react";
import UserPosts from "./UserPosts";

const UserContent = (props) => {
  const [isClicked, setIsClicked] = useState("posts");

  const show = (p) => {
    setIsClicked(p);
  };

  return (
    <div className="userContentContainer">
      <ProfileHeader show={show} showFullHeader={props.showFullHeader} />
      <UserPosts currentContent={isClicked} />
    </div>
  );
};

export default UserContent;
