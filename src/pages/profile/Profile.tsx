import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { reduxIF } from "../../interfaces";
import { userIF } from "../../interfaces";

import UserInfo from "./userInfo/UserInfo";
import UserContent from "./userContent/UserContent";
import Loading from "../elements/loading/Loading";

const axios = require("axios").default;

async function getUser(username: string | undefined) {
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
  const userData = useSelector((state: reduxIF) => state.userData.value);
  const requestedUser = useParams().username;
  const [data, setData] = useState<userIF>();
  const [isLoading, setIsLoading] = useState(true);
  const [showFullHeader, setShowFullHeader] = useState(false);

  useEffect(() => {
    if (userData.username === requestedUser) {
      setData(userData);
      setIsLoading(false);
      return;
    }

    (async () => {
      const user = await getUser(requestedUser);
      setData(user.data);
      setIsLoading(false);
    })();
  }, [requestedUser, userData]);

  useEffect(() => {
    if (data === undefined) {
      document.title = "Postgram | User not found";
      return;
    }

    window.document.title = `Postgram | ${data.name}`;
  }, [data]);

  if (isLoading) {
    return (
      <div className="usernamePage">
        <Loading />
      </div>
    );
  }

  if (data === undefined) {
    return <div style={{ color: "red" }}>User not Found</div>;
  }

  const showHeader = (con: boolean) => {
    setShowFullHeader(con);
  };

  return (
    <>
      <UserInfo data={data} showHeader={showHeader} />
      <UserContent showFullHeader={showFullHeader} />
    </>
  );
};

export default Profile;
