import BackToPrevious from "../../../elements/backPrevious";
import "../../../../../styles/profile/userInfo/profileCoverStyles.scss";
import { useSelector } from "react-redux";

import { reduxIF } from "../../../../../interfaces";

interface mainProps {
  coverImg: string | undefined;
}

const ProfileCover = (props: mainProps) => {
  const { coverImg } = props;

  const contentWidth = useSelector(
    (state: reduxIF) => state.contentContainerWidth.value
  );

  return (
    <div className="profileCoverImg">
      <div className="profileBackBtnContainer">
        <BackToPrevious backRoute={undefined} />
      </div>
      <img alt="cover" src={coverImg} style={{ height: contentWidth / 3 }} />
    </div>
  );
};

export default ProfileCover;
