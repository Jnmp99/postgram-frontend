import CreatePost from "./createPost/CreatePost";
import PostsContainer from "./posts/PostsContainer";
import LoginOrSignup from "./login-or-signup/login-or-signup";

const Content = () => {
  const isUserLogged = false;

  return (
    <article className="contentContainer">
      <CreatePost />
      <PostsContainer />
      {!isUserLogged && <LoginOrSignup />}
    </article>
  );
};

export default Content;
