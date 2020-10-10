import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

const Message = ({ id, contents }) => {
  return (
    <div className="message">
      <h1>message</h1>
      <Avatar />
      <p>message</p>
      <small>timestamp</small>
    </div>
  );
};

export default Message;
