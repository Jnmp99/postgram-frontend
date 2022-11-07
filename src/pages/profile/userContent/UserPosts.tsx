import PostContainer from "../../home/content/posts/PostsContainer";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { username } = useParams();

  return <PostContainer jwt="user" user={username} />;
};

export default UserPosts;
