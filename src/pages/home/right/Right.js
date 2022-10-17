import "../../../styles/home/rightStyles.scss";

const Right = (props) => {
  const { publicname, username, profilepic } = props;

  return (
    <div className="rightSide">
      <div className="rightContentContainer">
        <div className="asideContainer"></div>;
      </div>
      <div className="rightUserContainer">
        <div className="rightUserImgContainer">
          <img src={profilepic}></img>
        </div>
        <div className="rightUserNamesContainer">
          <span className="rightUserName">{publicname}</span>
          <span className="rightUserUsername">@{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Right;
