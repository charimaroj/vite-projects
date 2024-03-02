import React from "react";
import TodoContextLocal from "./projects/todocontext/TodoContextLocal";

const App = () => {
  return (
    <div className="container-fluid p-0">
      {/* ===== Project-7 createContext, useContext, useState, contextProvider, Localstorage - START =====*/}
      <TodoContextLocal />
      {/* ===== Project-7 - END =====*/}
    </div>
  );
};

export default App;
