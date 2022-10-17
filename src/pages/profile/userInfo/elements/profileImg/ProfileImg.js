import "../../../../../styles/profile/userInfo/profileImgStyles.scss";

const ProfileImg = (props) => {
  const { profile } = props;
  return (
    <div className="profileImgContainer">
      <div className="userProfileContainer">
        <img alt="userProfile" src={profile}></img>
      </div>
    </div>
  );
};

export default ProfileImg;
