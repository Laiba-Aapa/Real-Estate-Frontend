import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="sender__img">
        <img
          src="https://i.pinimg.com/originals/81/c0/9d/81c09d9aeb9635ef70e89828956827e1.jpg"
          alt="user"
        />
      </div>
      <div className="message__detail">
        <span>John Doe</span>
        <p>Lorem, ipsum dolor sit amet...</p>
      </div>
    </div>
  );
};

export default Message;
