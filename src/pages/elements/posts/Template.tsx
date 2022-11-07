import "../../../styles/home/contentStyles.scss";

import Left from "../../home/left/Left";
import TemplateContent from "./TemplateContent";
import Right from "../../home/right/Right";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { parseCookie } from "../../../features/cookies/cookiesSlice";
import { saveAccessToken } from "../../../features/accessToken/accessTokenSlices";
import { saveUserData } from "../../../features/userdata/userSlice";
import { saveContentContainerWidth } from "../../../features/contentContainerWidth/ContentContainerWidthSlice";

import { reduxIF } from "@app/interfaces";

const axios = require("axios").default;
const getData = async (token: string) => {
  try {
    const res = await axios.get("http://localhost:5000/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    window.location.href = "./login";
    return error;
  }
};

const Profile = () => {
  const { username } = useParams();
  const contentRef = useRef<HTMLElement>(null);
  const dispatch = useDispatch();

  const cookies = useSelector((state: reduxIF) => state.cookie.value);
  const accessToken = useSelector((state: reduxIF) => state.accessToken.value);

  useEffect(() => {
    if (!username) {
      window.document.title = `Postgram | Home`;
      return;
    }
  }, [username]);

  useEffect(() => {
    if (cookies.session_id) {
      dispatch(saveAccessToken(cookies.session_id));
      return;
    }
  }, [cookies]);

  useEffect(() => {
    if (accessToken) {
      (async () => {
        const res = await getData(accessToken);
        dispatch(saveUserData(res.data.user[0]));
      })();
    }
  }, [accessToken]);

  useEffect(() => {
    if (document.cookie.indexOf("session_id") !== -1) {
      dispatch(parseCookie(document.cookie));
      return;
    }
  }, []);

  if (document.cookie.indexOf("session_id") === -1) {
    window.location.href = "./login";
  }

  useEffect(() => {
    const resize = () => {
      if (contentRef.current !== null) {
        dispatch(saveContentContainerWidth(contentRef.current.offsetWidth));
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (contentRef.current !== null) {
      dispatch(saveContentContainerWidth(contentRef.current.offsetWidth));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Left />
      <article ref={contentRef} className="contentContainer">
        <TemplateContent />
      </article>
      <Right />
    </div>
  );
};

export default Profile;
