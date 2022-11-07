import { useEffect, useState } from "react";
import "../../../../styles/profile/follower/followerStyles.scss";
import BackToPrevious from "../../elements/backPrevious";
import { Link, useParams } from "react-router-dom";

const followers = {
  followers: [
    {
      id: "adfba",
      name: "Cat",
      username: "TheRealCat",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      description: "The real cat"
    },
    {
      id: "vdfba",
      name: "Cat",
      username: "TheRealCat",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      description: "The real cat"
    }
  ],
  following: [
    {
      id: "adfba",
      name: "Cat",
      username: "TheRedft",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      description: "The real cat"
    },
    {
      id: "vdfba",
      name: "Cat",
      username: "TheReasdft",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
      description: "The real cat"
    }
  ]
};

const Followers = () => {
  const [users, setUsers] = useState([]);

  const { username, userSub } = useParams();

  useEffect(() => {
    if (userSub) {
      setUsers(followers[userSub]);
    }
  }, [userSub]);

  let navElements = [
    { id: "followers", title: "Followers" },
    { id: "following", title: "Following" }
  ];

  return (
    <>
      <header className="followingHeader">
        <div className="followingHeaderInfo">
          <BackToPrevious backRoute={username} />
          <h2>{username}</h2>
        </div>
        <nav>
          <ul>
            {navElements.map((e) => {
              return (
                <li key={e.id}>
                  <Link
                    to={userSub === e.id ? "." : `../${username}/${e.id}`}
                    className={e.id === userSub ? "active" : "non-active"}
                  >
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className="followingContainer">
        {users.map((e) => {
          const { id, name, username, profile, description } = e;
          return (
            <section className="userFollower" key={id}>
              <div className="userInfoImgContainer">
                <img src={profile} alt="profile"></img>
              </div>
              <div className="userInfoContainer">
                <div className="userNameInfo">
                  <h3>{name}</h3>
                  <span>@{username}</span>
                </div>
                <div className="descriptionContainer">
                  <p>{description}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Followers;
