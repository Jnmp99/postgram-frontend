import Nav from "./nav/Nav";
import "../../../styles/home/leftStyles.scss";

const Left = (props) => {
  const { active } = props;
  return (
    <header className="leftSide">
      <span className="typedLogo">Postgram</span>
      <Nav active={active} />
    </header>
  );
};

export default Left;
