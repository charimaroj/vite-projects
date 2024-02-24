import React from "react";
import Login from "./components/Login";
import User from "./components/User";
import UserContextProvider from "./context/UserContextProvider";

const MiniContext = () => {
  return (
    <>
      <UserContextProvider>
        <Login />
        <User />
      </UserContextProvider>
    </>
  );
};

export default MiniContext;
