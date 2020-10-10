import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import Message from "./Message";

const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");

    // firebase magic
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          TO: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>send message</button>
        </form>
        <IconButton>
          <MicNone className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
