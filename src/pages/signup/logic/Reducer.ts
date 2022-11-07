// import { signupModalReducerStateIF } from "@app/interfaces";
import { signupModalReducerActionIF } from "@app/interfaces";

const reducer = (state: any, action: signupModalReducerActionIF) => {
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

export default reducer;
