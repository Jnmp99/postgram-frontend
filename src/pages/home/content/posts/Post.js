import "../../../../styles/home/postsStyles.scss";

const posts = [
  {
    id: "asdfasdf",
    user: "Cat",
    userName: "TheRealCat",
    userUrl: ".",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
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
    user: "Cat",
    userName: "TheRealCat",
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

const Post = () => {
  return (
    <>
      {posts.map((element) => {
        const {
          id,
          user,
          userName,
          userUrl,
          profile,
          post,
          postedAt,
          postedTime,
          img
        } = element;
        return (
          <section key={id} className="post">
            <div className="postImgContentContainer">
              <div className="postImgContainer">
                <img alt={`${userName} Profile`} src={profile}></img>
              </div>
            </div>
            <div className="postContentContainer">
              <div className="postUserInfoContainer">
                <a href={userUrl}>
                  <span className="postUser">{user}</span>
                </a>
                <a href={userUrl}>
                  <span className="postUserName">{`@${userName}`}</span>
                </a>
              </div>
              <div className="postInfoContainer">
                <div className="postContent">
                  <p>{post}</p>
                  {img && (
                    <div>
                      <img
                        className="postImgContainer"
                        src={img}
                        alt="post"
                      ></img>
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
