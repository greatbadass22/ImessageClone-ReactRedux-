import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined, Search } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <Search />
          <input type="text" placeholder="search" />
        </div>
        <IconButton varient="outlined" className="sidebar__inputButton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
