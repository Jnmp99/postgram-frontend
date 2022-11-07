import ProfileContent from "../../profile/Profile";
import Content from "../../home/content/Content";
import SubDirectory from "../../profile/subDirectories/subDirectory";

import { useParams } from "react-router-dom";

const TemplateContent = () => {
  const { username, userSub } = useParams();

  if (userSub) {
    return <SubDirectory />;
  }

  if (username) {
    return <ProfileContent />;
  }

  return <Content />;
};

export default TemplateContent;
