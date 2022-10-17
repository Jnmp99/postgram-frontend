import UserInfo from "./userInfo/UserInfo";
import UserContent from "./userContent/UserContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require("axios").default;

async function getUser(username) {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/Jnmp99/postgram-frontend/main/json/${username}.json`
    );
    return response;
  } catch (error) {
    return error;
  }
}

const Profile = () => {
  const { username } = useParams();
  const [data, setData] = useState({});
  const [isWaiting, setIsWaiting] = useState(true);
  const [showFullHeader, setShowFullHeader] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await getUser(username);
      setData(user.data);
      setIsWaiting(false);
    })();
  }, [username]);

  if (isWaiting) {
    return (
      <div style={{ color: "red" }} className="usernamePage">
        <h1>Waiting</h1>
      </div>
    );
  }

  if (data === undefined) {
    return <div style={{ color: "red" }}>User not Found</div>;
  }

  const showHeader = (con) => {
    setShowFullHeader(con);
  };

  return (
    <div className="usernamePage">
      <UserInfo data={data} showHeader={showHeader} />
      <UserContent showFullHeader={showFullHeader} />
    </div>
  );
};

export default Profile;
