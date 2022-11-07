import CreatePost from "./createPost/CreatePost";
import PostsContainer from "./posts/PostsContainer";
import LoginOrSignup from "./login-or-signup/login-or-signup";

const Content = () => {
  const isUserLogged = true;

  return (
    <>
      <CreatePost />
      <div className="homePostContainer">
        <PostsContainer jwt={false} user="" />
      </div>
      {!isUserLogged && <LoginOrSignup />}
    </>
  );
};

export default Content;
