import HomeIcon from "../../../../resources/navIcons/HomeIcon";
import ProfileIcon from "../../../../resources/navIcons/ProfileIcon";
import MessagesIcon from "../../../../resources/navIcons/MessagesIcon";

import { reduxIF } from "@app/interfaces";

import { useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";

const viewBox = "5 5 37.8 37.8";

const NavElements = () => {
  const { username } = useSelector((state: reduxIF) => state.userData.value);

  const param = useParams().username;

  const navElements = [
    {
      title: "Home",
      url: "..",
      className: !param ? "active" : "non-active",
      Icon: <HomeIcon viewBox={viewBox} fill="white" />,
    },
    {
      title: "Profile",
      url: `../../../${username}`,
      className: username === param ? "active" : "non-active",
      Icon: <ProfileIcon viewBox={viewBox} fill="white" />,
    },
    {
      title: "Messages",
      url: "./messages",
      className: param === "message" ? "active" : "non-active",
      Icon: <MessagesIcon viewBox={viewBox} fill="white" />,
    },
  ];

  return (
    <>
      {navElements.map((e) => {
        const { title, url, className, Icon } = e;
        return (
          <li key={title}>
            <Link to={url} className={className}>
              <div className="navIconContainer">{Icon}</div>
              <span>{title}</span>
            </Link>
          </li>
        );
      })}{" "}
    </>
  );
};

export default NavElements;
