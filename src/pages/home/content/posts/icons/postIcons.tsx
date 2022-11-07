import HeartIcon from "../../../../../resources/postIcons/heartIcon";
import CommentIcon from "../../../../../resources/postIcons/commentIcon";
import ShareIcon from "../../../../../resources/postIcons/shareIcon";

import "../../../../../styles/home/post/icons/postIcons.scss";

interface mainProps {
  likes: number;
  shares: number;
  replies: number;
}

const icons = [
  {
    id: "shares",
    title: "postShareIconContainer",
    element: <ShareIcon fill="white" viewBox="0 0 50 50" />,
  },
  {
    id: "replies",
    title: "postCommentIconContainer",
    element: <CommentIcon fill="white" viewBox="0 0 50 50" />,
  },
  {
    id: "likes",
    title: "postHeartIconContainer",
    element: <HeartIcon fill="white" viewBox="0 0 50 50" />,
  },
];

const getNumber = (num: number) => {
  let x = num.toLocaleString("en-US");
  return x;
};

const getNumbersUnits = (num: number) => {
  let x = getNumber(num);
  let y;
  let decimalSeparator: string = "";
  let kSeparator: string = "";

  if (x.indexOf(".") === -1) {
    decimalSeparator = ".";
    kSeparator = ",";
  }

  if (x.indexOf(",") === -1) {
    decimalSeparator = ",";
    kSeparator = ".";
  }

  if (num.toString().length > 4) {
    y = x
      .slice(0, x.toString().indexOf(kSeparator) + 2)
      .replace(kSeparator, decimalSeparator);
    return `${y}k`;
  }

  return x;
};

const PostIcons = (props: mainProps) => {
  const { replies, shares, likes } = props;

  const interactions = [
    { id: "shares", count: shares },
    { id: "replies", count: replies },
    { id: "likes", count: likes },
  ];

  return (
    <div className="postInteractionContainer">
      {icons.map((e) => {
        const { title, element, id } = e;
        return (
          <div key={id} className={`${title} postIconContainer`}>
            <div className="postIcons">{element}</div>
            <div className="postInteractionsCount">
              {interactions.map((el) => {
                if (id === el.id) {
                  return <span key={id}>{getNumbersUnits(el.count)}</span>;
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostIcons;
