import "../../../styles/profile/profileStyes.scss";
import ProfileCover from "./elements/profileCover/ProfileCover";
import ProfileImg from "./elements/profileImg/ProfileImg";
import ProfileInfo from "./elements/profileInfo/ProfileInfo";

const Profile = (props) => {
  const { profile, coverPic } = props.data;

  return (
    <div className="userProfile">
      <ProfileCover coverImg={coverPic} />
      <div className="profileContainer">
        <ProfileImg profile={profile} />
        <ProfileInfo {...props.data} showHeader={props.showHeader} />
      </div>
    </div>
  );
};

export default Profile;
