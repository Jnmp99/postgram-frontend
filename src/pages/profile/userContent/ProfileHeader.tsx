import { Link, useParams } from "react-router-dom";
import Follow from "../userInfo/elements/profileInfo/name&Btn/FollowBtn";

const elements = [
  { title: "Posts", id: "posts" },
  { title: "Media", id: "media" },
  { title: "Posts and Shares", id: "shares" },
  { title: "Likes", id: "likes" },
];

interface mainProps {
  showFullHeader: boolean;
}

const ProfileHeader = (props: mainProps) => {
  const { showFullHeader } = props;

  const { username, userSub } = useParams();

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
                className={
                  userSub === e.id || (e.id === "posts" && !userSub)
                    ? "active"
                    : "non-active"
                }
                key={e.id}
              >
                <Link
                  to={
                    e.id === "posts"
                      ? `../${username}`
                      : `../../${username}/${e.id}`
                  }
                >
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default ProfileHeader;
