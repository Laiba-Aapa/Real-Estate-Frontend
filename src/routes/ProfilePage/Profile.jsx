import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/ProfileComp/List";
import "./profile.scss";
import apiRequest from "../../lib/apiRequest";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const posts = useLoaderData();
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profile">
      <div className="profile__details">
        <div className="wrapper">
          <div className="detail__head">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="user__info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="use img" />
            </span>
            <span>
              UserName: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout} className="logout__btn">
              Logout
            </button>
          </div>
          <div className="detail__head">
            <h1>My Lists</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error Loading Posts</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="detail__head">
            <h1>Saved Lists</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error Loading Posts</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chat__Container">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.chatResponse}
              errorElement={<p>Error Loading Posts</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
