import "../../../../styles/home/notLoggedStyles.scss";

const LoginOrSignup = () => {
  return (
    <section className="notLoggedMessage">
      <div className="notLoggedTitleContainer">
        <h2>Looks like you are not logged in.</h2>
      </div>
      <div className="notLoggedContentContainer">
        <a href="./signup">
          <span>Create an Account</span>
        </a>
        <a href="./login">
          <span>Login</span>
        </a>
      </div>
    </section>
  );
};

export default LoginOrSignup;
