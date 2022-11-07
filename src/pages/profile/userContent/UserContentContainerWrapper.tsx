import UserPosts from "./UserPosts";
import { useParams } from "react-router-dom";

const UserContentContainerWrapper = () => {
  const { username, userSub } = useParams();

  if (!userSub && username) {
    return <UserPosts />;
  }

  return <h1 style={{ color: "red" }}>{userSub}</h1>;
};

export default UserContentContainerWrapper;
