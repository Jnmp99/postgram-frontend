import Description from "./description/Description";
import NameBtn from "./name&Btn/NameBtn";
import Following from "./following/Following";
import { useEffect, useRef, useState } from "react";

import { userIF } from "../../../../../interfaces";
import * as React from "react";

interface mainProps {
  data: userIF;
  showHeader: any;
}

const ProfileInfo = (props: mainProps) => {
  const infoElement = useRef<HTMLElement>(null);
  const { name, username, description, followers, followings } = props.data;
  const showHeader = props.showHeader;

  const [infoY, setInfoY] = useState(100);

  const move = () => {
    if (infoElement.current !== null) {
      setInfoY(infoElement.current.getBoundingClientRect().bottom);
    }
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
    <div
      className="profileInfoContainer"
      ref={infoElement as React.RefObject<HTMLDivElement>}
    >
      <div className="profileBio">
        <NameBtn name={name} username={username} />
        <Description description={description} />
      </div>
      <Following followers={followers} following={followings} />
    </div>
  );
};

export default ProfileInfo;
