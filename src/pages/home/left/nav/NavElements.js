import HomeIcon from "../../../../resources/navIcons/HomeIcon";
import ProfileIcon from "../../../../resources/navIcons/ProfileIcon";
import MessagesIcon from "../../../../resources/navIcons/MessagesIcon";

const viewBox = "5 5 37.8 37.8";

const NavElements = (props) => {
  const { active } = props;
  const navElements = [
    {
      title: "Home",
      url: ".",
      className: active === "home" ? "active" : "non-active",
      Icon: <HomeIcon viewBox={viewBox} />
    },
    {
      title: "Profile",
      url: "./profile",
      className: active === "profile" ? "active" : "non-active",
      Icon: <ProfileIcon viewBox={viewBox} />
    },
    {
      title: "Messages",
      url: "./messages",
      className: active === "message" ? "active" : "non-active",
      Icon: <MessagesIcon viewBox={viewBox} />
    }
  ];

  return (
    <>
      {navElements.map((e) => {
        const { title, url, className, Icon } = e;
        return (
          <li key={title}>
            <a className={className} href={url}>
              <div className="navIconContainer">{Icon}</div>
              <span>{title}</span>
            </a>
          </li>
        );
      })}{" "}
    </>
  );
};

export default NavElements;
