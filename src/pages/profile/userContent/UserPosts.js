import PostContainer from "../../home/content/posts/PostsContainer";
import { useParams } from "react-router-dom";

const UserPosts = (props) => {
  const { currentContent } = props;

  const { username } = useParams();

  if (currentContent === "posts") {
    return <PostContainer jwt="user" user={username} />;
  }

  return <h1 style={{ color: "red" }}>{currentContent}</h1>;
};

export default UserPosts;
