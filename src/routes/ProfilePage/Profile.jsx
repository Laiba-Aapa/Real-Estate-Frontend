import Chat from "../../components/Chat/Chat";
import List from "../../components/ProfileComp/List";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__details">
        <div className="wrapper">
          <div className="detail__head">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="user__info">
            <span>
              Avatar:
              <img
                src="https://i.pinimg.com/originals/81/c0/9d/81c09d9aeb9635ef70e89828956827e1.jpg"
                alt="use img"
              />
            </span>
            <span>
              UserName: <b>John Doe</b>
            </span>
            <span>
              Email: <b>JohnDoe@gmail.com</b>
            </span>
          </div>
          <div className="detail__head">
            <h1>My Lists</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="detail__head">
            <h1>Saved Lists</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chat__Container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
