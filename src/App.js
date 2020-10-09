import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login.js";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Imessage from "./Imessage";

function App() {
  const user = useSelector(selectUser);
  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
