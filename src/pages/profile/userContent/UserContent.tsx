import ProfileHeader from "./ProfileHeader";
import "../../../styles/profile/userContent/userContentStyles.scss";
import UserContainerWrapper from "./UserContentContainerWrapper";

interface mainProps {
  showFullHeader: boolean;
}

const UserContent = (props: mainProps) => {
  return (
    <div className="userContentContainer">
      <ProfileHeader showFullHeader={props.showFullHeader} />
      <div className="userContentContainerWrapper">
        <UserContainerWrapper />
      </div>
    </div>
  );
};

export default UserContent;
