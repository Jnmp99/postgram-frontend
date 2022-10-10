const reducer = (state, action) => {
  const { username, password, isError, errorMessage } = action;

  if (!username || !password) {
    return { isError: true, errorMessage: "All fields are required" };
  }

  return { username, password, isError: false, errorMessage: "" };
};

export default reducer;
