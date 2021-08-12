import React, { useState, useRef, useEffect } from "react";
import io from "socket.io/client";
import immer from "immer";
import Form from "./components/UserForm";

function App() {
  const [username, setusername] = useState("");
  const [connected, setconnected] = useState(false);
  const [allusers, setallusers] = useState([]);
  const [allcharacters, setallcharacters] = useState([]);
  const socketref = useRef();

  let body;
  if (connected) {
    body = <userlist user={user} users={users} />;
  } else {
    body = (
      <Form username={username} onChange={handlechange} connect={connect} />
    );
  }
  return <div className="App">{body}</div>;
}

export default App;
