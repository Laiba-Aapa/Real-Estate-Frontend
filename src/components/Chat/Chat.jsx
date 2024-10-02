import { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext.jsx";
import { useNotificationStore } from "../../lib/notificationStore.jsx";

const Chat = ({ chats }) => {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const decrease = useNotificationStore((state) => state.decrease);

  const [chat, setChat] = useState(null);

  const handleOpenChat = async (id, reciever) => {
    try {
      const res = await apiRequest("/chats/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, reciever });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, message: [...prev.message, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        recieverId: chat.reciever.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // get message from other user
  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };
    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, message: [...prev.message, data] }));
          read();
        }
      });
    }

    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);
  // get scroll down to current chat

  const messageEndRef = useRef();
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            key={c.id}
            className="message"
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || c.id === chat?.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.reciever)}
          >
            <div className="sender__img">
              <img src={c.reciever.avatar || "noavatar.jpg"} alt="user" />
            </div>
            <div className="message__detail">
              <span>{c.reciever.username}</span>
              <p>{c.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="chat__top">
            <div className="chat__user__info">
              <img src={chat.reciever.avatar || "noavatar.jpg"} alt="" />
              <span>{chat.reciever.username}</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="chat__center">
            {chat.message.map((msg) => (
              <div
                className={`chat__message ${
                  msg.userId === currentUser.id ? "own" : ""
                }`}
              >
                <p>{msg.text}</p>
                <span>{format(msg.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="chat__bottom">
            <textarea name="text"></textarea>
            <button>Send </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
