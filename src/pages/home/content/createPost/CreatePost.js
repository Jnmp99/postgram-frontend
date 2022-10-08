import "../../../../styles/home/createPostStyles.scss";
import InsertIcons from "./insertIcons";

import react, { useRef, useEffect, useState, useReducer } from "react";

const initialState = { isOnFocus: false };

const reducer = (state, action) => {
  return { isOnFocus: action.isOnFocus };
};

const CreatePost = () => {
  const text = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      if (
        text.current !== document.activeElement &&
        text.current.innerHTML === ""
      ) {
        dispatch({ isOnFocus: false });
      }
    });
  }, []);

  return (
    <section className="createPostContainer">
      <div className="newTextContainer">
        <div className="imgContentContainer">
          <div className="imgContainer">
            <img
              alt="profile"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            ></img>
          </div>
        </div>
        <div className="textInputContainer">
          <div className="textareaContainer">
            <span
              ref={text}
              onClick={() => dispatch({ isOnFocus: true })}
              contentEditable="true"
              suppressContentEditableWarning
              className="textarea"
              data-placeholder="What are you thinking?"
              data-focused-advice="Start typing"
            ></span>
          </div>
          <InsertIcons isOnFocus={state.isOnFocus} />
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
