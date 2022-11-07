import "../../../../styles/home/navStyles.scss";
import NavElements from "./NavElements";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navContainer">
        <ul>
          <NavElements />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
