import HomeIcon from "../../../../resources/navIcons/HomeIcon";
import ProfileIcon from "../../../../resources/navIcons/ProfileIcon";
import MessagesIcon from "../../../../resources/navIcons/MessagesIcon";

import { Link } from "react-router-dom";

const viewBox = "5 5 37.8 37.8";
const user = "./TheRealCat";

const NavElements = (props) => {
  const { active } = props;

  console.log(active);
  const navElements = [
    {
      title: "Home",
      url: "..",
      className: active === "home" ? "active" : "non-active",
      Icon: <HomeIcon viewBox={viewBox} />,
    },
    {
      title: "Profile",
      url: user,
      className: active === "profile" ? "active" : "non-active",
      Icon: <ProfileIcon viewBox={viewBox} />,
    },
    {
      title: "Messages",
      url: "./messages",
      className: active === "message" ? "active" : "non-active",
      Icon: <MessagesIcon viewBox={viewBox} />,
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
