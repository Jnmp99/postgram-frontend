import "../../../../../styles/profile/userInfo/profileImgStyles.scss";

interface mainProps {
  profile: undefined | string;
}

const ProfileImg = (props: mainProps) => {
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
