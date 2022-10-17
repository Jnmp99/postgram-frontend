import CreatePost from "./createPost/CreatePost";
import PostsContainer from "./posts/PostsContainer";
import LoginOrSignup from "./login-or-signup/login-or-signup";

const Content = () => {
  const isUserLogged = true;

  return (
    <article className="contentContainer">
      <CreatePost />
      <div className="homePostContainer">
        <PostsContainer jwt={false} />
      </div>
      {!isUserLogged && <LoginOrSignup />}
    </article>
  );
};

export default Content;
