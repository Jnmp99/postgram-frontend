import { useEffect, useReducer } from "react";

import reducer from "./logic/Reducer";

interface mainProps {
  email: string | undefined;
  password: string | undefined;
  username: string | undefined;
  checkIfError: any;
}

const initialState: any = {
  error: false,
  message: "",
  username: "",
  password: "",
  email: "",
};

const Modal = (props: mainProps) => {
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
  }, [state, checkIfError]);

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
