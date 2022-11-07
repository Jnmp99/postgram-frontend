import { useParams } from "react-router-dom";

import Followers from "./following/Followers";
import Profile from "../Profile";

const SubDirectory = () => {
  const { userSub } = useParams();

  if (userSub === "followers" || userSub === "following") return <Followers />;
  if (userSub === "media" || userSub === "shares" || userSub === "likes") {
    return <Profile />;
  }

  return null;
};

export default SubDirectory;
