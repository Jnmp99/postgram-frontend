import "../../../../styles/home/postsStyles.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../elements/loading/Loading";

import PostIcons from "./icons/postIcons";
import { postsIF } from "../../../../interfaces";

const p: Array<postsIF> = [
  {
    id: "gaed",
    user: "Dog",
    userName: "TheRealDog",
    userUrl: ".",
    profile:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    likes: 2504,
    shares: 396,
    replies: 3685,
    postedAt: "2022/10/05",
    postedTime: "22:00",
    img: undefined,
  },
  {
    id: "fasdabsdf",
    user: "Cat",
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus et interdum et, eleifend ac nulla. Duis eros nibh, commodo sed eros at, efficitur fermentum leo. Donec fringilla lorem a nibh lacinia rhoncus. Quisque pretium augue eget pulvinar ornare. Quisque ma.",
    likes: 2794,
    shares: 1609,
    replies: 7368,
    postedAt: "2022/10/05",
    postedTime: "22:00",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  },
  {
    id: "fasdabf",
    user: "Dog",
    userName: "TheRealDog",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    likes: 10504,
    shares: 70,
    replies: 4933,
    postedAt: "2022/10/05",
    postedTime: "18:00",
    img: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
  },
  {
    id: "fasd",
    user: "Cat",
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    likes: 25600,
    shares: 23,
    replies: 50,
    postedAt: "2022/10/05",
    postedTime: "15:00",
    img: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
  {
    id: "fasasd",
    user: "Cat",
    post: undefined,
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    likes: 504,
    shares: 23,
    replies: 50,
    postedAt: "2022/10/05",
    postedTime: "15:00",
    img: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
];

interface mainProps {
  jwt: boolean | string;
  user: string | undefined;
}

const Post = (props: mainProps) => {
  const [posts, setPosts] = useState<postsIF[]>();
  const { jwt, user } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (jwt === false) {
      setPosts(p);
      setIsLoading(false);
      return;
    }

    setPosts(() => {
      setIsLoading(false);
      return p.filter((e: postsIF) => {
        return e.userName === user;
      });
    });
  }, [jwt, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {posts?.map((element) => {
        const {
          id,
          user,
          userName,
          profile,
          post,
          likes,
          shares,
          replies,
          postedAt,
          postedTime,
          img,
        } = element;
        return (
          <section key={id} className="post">
            <div className="postImgContentContainer">
              <div className="postImgContainer">
                <Link to={`/${userName}`}>
                  <img alt={`${userName} Profile`} src={profile}></img>
                </Link>
              </div>
            </div>
            <div className="postContentContainer">
              <div className="postUserInfoContainer">
                <Link to={`/${userName}`}>
                  <span className="postUser">{user}</span>
                  <span className="postUserName">{`@${userName}`}</span>
                </Link>
              </div>
              <div className="postInfoContainer">
                <div className="postContent">
                  <p>{post}</p>
                  {img && (
                    <div className="postImgContainer">
                      <img src={img} alt="post"></img>
                    </div>
                  )}
                  <PostIcons likes={likes} shares={shares} replies={replies} />
                </div>
                <div className="postSrcInfoContainer">
                  <span className="postTime">{postedTime}</span>
                  <span> • </span>
                  <span className="postDate">{postedAt}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Post;
