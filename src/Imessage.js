import React from "react";
import "./Imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Imessage = () => {
  return (
    <div className="iMessage">
      <Sidebar />
      <Chat />

      {/* chat */}
    </div>
  );
};

export default Imessage;
