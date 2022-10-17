import "../../../../styles/home/postsStyles.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const p = [
  {
    id: "gaed",
    user: "Dog",
    userName: "TheRealDog",
    userUrl: ".",
    profile:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    postedAt: "2022/10/05",
    postedTime: "22:00"
  },
  {
    id: "fasdabsdf",
    user: "Cat",
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus et interdum et, eleifend ac nulla. Duis eros nibh, commodo sed eros at, efficitur fermentum leo. Donec fringilla lorem a nibh lacinia rhoncus. Quisque pretium augue eget pulvinar ornare. Quisque ma.",
    postedAt: "2022/10/05",
    postedTime: "22:00",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },
  {
    id: "fasdabf",
    user: "Dog",
    userName: "TheRealDog",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    postedAt: "2022/10/05",
    postedTime: "18:00",
    img:
      "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
  },
  {
    id: "fasd",
    user: "Cat",
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    post: "Water, water everywhere, nor any drop to drink",
    postedAt: "2022/10/05",
    postedTime: "15:00",
    img:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
  }
];

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const { jwt, user } = props;

  useEffect(() => {
    if (jwt === false) {
      setPosts(p);
      return;
    }

    setPosts(() => {
      return p.filter((e) => {
        return e.userName === user;
      });
    });
  }, [jwt, user]);

  return (
    <>
      {posts.map((element) => {
        const {
          id,
          user,
          userName,
          profile,
          post,
          postedAt,
          postedTime,
          img
        } = element;
        return (
          <section key={id} className="post">
            <div className="postImgContentContainer">
              <Link to={`/${userName}`} className="postImgContainer">
                <img alt={`${userName} Profile`} src={profile}></img>
              </Link>
            </div>
            <div className="postContentContainer">
              <div className="postUserInfoContainer">
                <Link to={`/${userName}`}>
                  <span className="postUser">{user}</span>
                </Link>
                <Link to={`/${userName}`}>
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
