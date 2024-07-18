import { useState } from "react";
import "./chat.scss";
import Message from "./Message";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      {chat && (
        <div className="chatBox">
          <div className="chat__top">
            <div className="chat__user__info">
              <img
                src="https://i.pinimg.com/originals/81/c0/9d/81c09d9aeb9635ef70e89828956827e1.jpg"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="chat__center">
            <div className="chat__message own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message ">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit at nesciunt.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit at nesciunt.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit at nesciunt.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit at nesciunt.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat__message own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit at nesciunt.
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="chat__bottom">
            <textarea></textarea>
            <button>Send </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
