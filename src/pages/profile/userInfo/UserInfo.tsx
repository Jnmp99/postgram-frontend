import "../../../styles/profile/profileStyes.scss";
import ProfileCover from "./elements/profileCover/ProfileCover";
import ProfileImg from "./elements/profileImg/ProfileImg";
import ProfileInfo from "./elements/profileInfo/ProfileInfo";

import { userIF } from "../../../interfaces";

interface mainProps {
  data: userIF;
  showHeader: any;
}

const Profile = (props: mainProps) => {
  const { profilepic, coverImg } = props.data;

  return (
    <div className="userProfile">
      <ProfileCover coverImg={coverImg} />
      <div className="profileContainer">
        <ProfileImg profile={profilepic} />
        <ProfileInfo data={props.data} showHeader={props.showHeader} />
      </div>
    </div>
  );
};

export default Profile;
