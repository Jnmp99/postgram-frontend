import { useParams } from "react-router-dom";
import BackToPrevious from "../../../elements/backPrevious";
import "../../../../../styles/profile/userInfo/profileCoverStyles.scss";

const ProfileCover = (props) => {
  const { coverImg } = props;
  return (
    <div className="profileCoverImg">
      <div className="profileBackBtnContainer">
        <BackToPrevious />
      </div>
      <img alt="cover" src={coverImg} />
    </div>
  );
};

export default ProfileCover;
