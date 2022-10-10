import { useEffect, useReducer, useState } from "react";
const initialState = {
  error: false,
  message: "",
  username: "",
  password: "",
  email: "",
};

const reducer = (state, action) => {
  if (action.username !== undefined && !action.username) {
    return {
      error: true,
      message: "An username is required",
    };
  }

  if (action.email !== undefined && action.email.indexOf("@gmail.com") === -1) {
    return {
      error: true,
      message: "A valid email address is required",
    };
  }

  if (action.password !== undefined && action.password.length < 8) {
    return {
      error: true,
      message: "Password must be at least 8 characters",
    };
  }

  return { error: false, message: "no errors" };
};

const Modal = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, email, checkIfError } = props;

  useEffect(() => {
    dispatch({ username, password, email });
  }, [username, password, email]);

  useEffect(() => {
    if (state.error) {
      checkIfError(true);
    } else {
      checkIfError(false);
    }
  }, [state]);

  return (
    <>
      {state.error && (
        <div className="signUpModal">
          <span>{state.message}</span>
        </div>
      )}
    </>
  );
};

export default Modal;
