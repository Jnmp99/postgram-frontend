import Post from "./Post";
import "../../../../styles/home/postsContainer.scss";

interface mainProps {
  jwt: boolean | string;
  user: string | undefined;
}

const PostsContainer = (props: mainProps) => {
  const { jwt, user } = props;
  return (
    <div className="postsContainer">
      <Post jwt={jwt} user={user} />
    </div>
  );
};

export default PostsContainer;
