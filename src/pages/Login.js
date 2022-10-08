import react, { useState } from "react";
import EyeIcon from "../resources/insertIcons/PsEyeIcon";

import "../styles/loginStyles.scss";

const Login = () => {
  const submit = (username, password) => {
    console.log(username, password);
  };

  const [isPsVisible, setIsPsVisible] = useState(false);
  return (
    <div className="login">
      <h1 className="PGLogo">PostGram</h1>
      <h2>Login</h2>
      <form onSubmit={() => submit}>
        <input
          className="usernameInput"
          type="text"
          placeholder="username"
        ></input>
        <div className="passwordContainer">
          <input
            type={isPsVisible ? "text" : "password"}
            placeholder="password"
          ></input>
          <button type="button" onClick={() => setIsPsVisible(!isPsVisible)}>
            <EyeIcon fill={isPsVisible ? "black" : "gray"} />
          </button>
        </div>
        <button>Log in</button>
      </form>
      <p>
        <a href="./">Forgot password or username</a>
      </p>
      <p>
        <a href="./signup">Create an account</a>
      </p>
    </div>
  );
};

export default Login;
