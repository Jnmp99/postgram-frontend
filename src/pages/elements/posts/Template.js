import "../../../styles/home/contentStyles.scss";

import Left from "../../home/left/Left";
import Right from "../../home/right/Right";
import { useEffect, useState } from "react";
import TemplateContent from "./TemplateContent";
import { useSelector, useDispatch } from "react-redux";
import { parseCookie } from "../../../features/cookies/cookiesSlice";
import { saveAccessToken } from "../../../features/accessToken/accessTokenSlices";
import Loading from "../loading/Loading";

const axios = require("axios").default;

const profile = {
  name: "Jank",
  username: "jank",
  profile:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
};

const getData = async (token) => {
  try {
    const res = await axios.get("http://localhost:5000/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    window.location = "./n/login";
    return error;
  }
};

const Profile = (props) => {
  const { current } = props;
  const [active, setActive] = useState("");
  const [data, setData] = useState({});
  const [isWaiting, setIsWaiting] = useState(true);

  const dispatch = useDispatch();

  const cookies = useSelector((state) => state.cookie.value);
  const accessToken = useSelector((state) => state.accessToken.value);

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
        setData(res.data.user[0]);
        setIsWaiting(false);
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
    window.location = "./n/login";
  }

  if (isWaiting) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Left active={current} />
      <TemplateContent current={current} />
      <Right {...data} />
    </div>
  );
};

export default Profile;
