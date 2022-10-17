import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Follow from "../userInfo/elements/profileInfo/name&Btn/FollowBtn";

const ProfileHeader = (props) => {
  const { show, showFullHeader } = props;
  const elements = [
    { title: "Posts", id: "posts" },
    { title: "Media", id: "media" },
    { title: "Posts and Shares", id: "shares" },
    { title: "Likes", id: "likes" }
  ];

  const [isClicked, setIsClicked] = useState("posts");

  useEffect(() => {
    show(isClicked);
  }, [isClicked, show]);

  return (
    <header className="userProfileHeader">
      {showFullHeader && (
        <div className="fullHeaderContainer">
          <Follow />
        </div>
      )}
      <nav>
        <ul>
          {elements.map((e) => {
            return (
              <li
                className={isClicked === e.id ? "active" : "non-active"}
                key={e.id}
                onClick={() => setIsClicked(e.id)}
              >
                {e.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default ProfileHeader;
