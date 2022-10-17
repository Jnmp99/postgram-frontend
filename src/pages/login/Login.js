import react, { useEffect, useState } from "react";
import EyeIcon from "../../resources/insertIcons/PsEyeIcon";
import { useSelector, useDispatch } from "react-redux";
import { parseCookie } from "../../features/cookies/cookiesSlice";
import { saveAccessToken } from "../../features/accessToken/accessTokenSlices";

import "../../styles/loginStyles.scss";

const axios = require("axios").default;

const getLogin = async (u, p) => {
  try {
    const res = await axios.post("http://localhost:5000/login", {
      username: u,
      password: p,
    });

    return res;
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = useSelector((state) => state.cookie.value);
  const accessToken = useSelector((state) => state.accessToken.value);

  const submit = (e) => {
    e.preventDefault();

    (async () => {
      const data = await getLogin(username, password);
      let tempAccessToken = data.data.accessToken;

      if (tempAccessToken) {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 60000);
        let exDate = date.toUTCString();

        document.cookie = `session_id=${tempAccessToken}; expires=${exDate}; path=/`;
        dispatch(parseCookie(document.cookie));
      }
    })();
  };

  useEffect(() => {
    if (cookies.session_id) {
      dispatch(saveAccessToken(cookies.session_id));
    }
  }, [cookies]);

  useEffect(() => {
    if (document.cookie.indexOf("session_id") !== -1) {
      dispatch(parseCookie(document.cookie));
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      window.location.replace("../../");
    }
  }, [accessToken]);

  const [isPsVisible, setIsPsVisible] = useState(false);
  return (
    <div className="login">
      <h1 className="PGLogo">PostGram</h1>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          className="usernameInput"
          type="text"
          placeholder="username"
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <div className="passwordContainer">
          <input
            type={isPsVisible ? "text" : "password"}
            placeholder="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
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
