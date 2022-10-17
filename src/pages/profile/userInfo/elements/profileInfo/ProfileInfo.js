import { Link } from "react-router-dom";
import Description from "./description/Description";
import NameBtn from "./name&Btn/NameBtn";
import Following from "./following/Following";
import { useEffect, useRef, useState } from "react";

const ProfileInfo = (props) => {
  const infoElement = useRef(null);
  const {
    name,
    username,
    description,
    followers,
    following,
    showHeader
  } = props;
  const [infoY, setInfoY] = useState(100);

  const move = () => {
    setInfoY(infoElement.current.getBoundingClientRect().bottom);
  };

  useEffect(() => {
    document.addEventListener("scroll", move);

    return () => {
      document.removeEventListener("scroll", move);
    };
  }, []);

  useEffect(() => {
    if (infoY <= 0) {
      showHeader(true);
      return;
    }

    showHeader(false);
  }, [infoY, showHeader]);

  return (
    <div className="profileInfoContainer" ref={infoElement}>
      <div className="profileBio">
        <NameBtn name={name} username={username} />
        <Description description={description} />
      </div>
      <Following followers={followers} following={following} />
    </div>
  );
};

export default ProfileInfo;
