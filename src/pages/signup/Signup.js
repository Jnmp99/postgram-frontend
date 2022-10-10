import "../../styles/signupStyles.scss";
import { useReducer, useRef, useState } from "react";
import Modal from "./Modal";

import reducer from "./logic/Reducer";

const requestInitialState = {
  username: "",
  password: "",
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const [state, dispatch] = useReducer(reducer, requestInitialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ username, password });
  };

  const inputs = [
    {
      id: "username",
      type: "text",
      placeholder: "username",
      autoComplete: "username",
      className: "usernameInput",
      onChange: setUsername,
    },
    {
      id: "email",
      type: "email",
      placeholder: "user@email.com",
      autoComplete: "email",
      className: "emailInput",
      onChange: setEmail,
    },
    {
      id: "password",
      type: "password",
      placeholder: "password",
      autoComplete: "current-password",
      className: "passwordInput",
      onChange: setPassword,
    },
  ];

  const checkIfError = (isError) => {
    setIsError(isError);
  };

  console.log(isError);

  return (
    <>
      <div className="signup">
        <h1 className="PGLogo">PostGram</h1>
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => {
            const { type, placeholder, autoComplete, className, onChange, id } =
              input;
            let props = {};

            if (id === "username") {
              props.username = username;
            }

            if (id === "email") {
              props.email = email;
            }

            if (id === "password") {
              props.password = password;
            }

            return (
              <div key={id} className="inputContainer">
                <label className="signupLabel" htmlFor={id}>
                  {id.slice(0, 1).toUpperCase() + id.slice(1, id.length)}:
                </label>
                <input
                  id={id}
                  onChange={(e) => onChange(e.target.value)}
                  className={className}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                ></input>
                <Modal {...props} checkIfError={checkIfError} />
              </div>
            );
          })}
          <button
            style={{
              backgroundColor: isError
                ? "hsl(339, 80%, 25%)"
                : "hsl(339, 80%, 51%)",
              color: isError ? "gray" : "white",
              cursor: isError ? "default" : "pointer",
            }}
          >
            Sign up
          </button>
        </form>
        <span>
          Already have an account? <a href="./login">Log in.</a>
        </span>
      </div>
    </>
  );
};

export default Signup;
