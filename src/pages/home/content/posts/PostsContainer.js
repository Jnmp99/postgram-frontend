import Post from "./Post";
import "../../../../styles/home/postsContainer.scss";

const PostsContainer = (props) => {
  const { jwt, user } = props;
  return (
    <div className="postsContainer">
      <Post jwt={jwt} user={user} />
    </div>
  );
};

export default PostsContainer;
