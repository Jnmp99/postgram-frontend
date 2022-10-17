import ProfileContent from "../../profile/Profile";
import Followers from "../../profile/following/Followers";
import Content from "../../home/content/Content";

const TemplateContent = (props) => {
  const { current } = props;

  if (current === "followers" || current === "following") {
    return <Followers current={current} />;
  }

  if (current === "home") {
    return <Content />;
  }

  return <ProfileContent />;
};

export default TemplateContent;
