import "../../../../styles/home/navStyles.scss";
import NavElements from "./NavElements";

const Nav = (props) => {
  const { active } = props;
  return (
    <nav className="nav">
      <div className="navContainer">
        <ul>
          <NavElements active={active} />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
