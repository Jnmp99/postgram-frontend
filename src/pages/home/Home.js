import "../../styles/home/contentStyles.scss";

import Left from "./left/Left";
import Right from "./right/Right";
import Content from "./content/Content";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Left active={active} />
      <Content />
      <Right />
    </div>
  );
};

export default Home;
