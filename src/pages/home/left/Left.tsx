import Nav from "./nav/Nav";
import "../../../styles/home/leftStyles.scss";

const Left = () => {
  return (
    <header className="leftSide">
      <span className="typedLogo">Postgram</span>
      <Nav />
    </header>
  );
};

export default Left;
