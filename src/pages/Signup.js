import react from "react";
import EyeIcon from "../resources/insertIcons/PsEyeIcon";

import "../styles/signupStyles.scss";

const Signup = () => {
  return (
    <>
      <div className="signup">
        <h1 className="PGLogo">PostGram</h1>
        <h2>Sign-up</h2>
        <form>
          <input
            className="usernameInput"
            type="text"
            placeholder="username"
          ></input>
          <input
            className="passwordInput"
            type="password"
            placeholder="password"
          ></input>
          <button>Sign up</button>
        </form>
        <span>
          Already have an account? <a href="./">Log in.</a>
        </span>
      </div>
    </>
  );
};

export default Signup;
