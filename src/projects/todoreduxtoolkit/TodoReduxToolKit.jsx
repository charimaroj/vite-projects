//intall react-redux ---           npm install react-redux
//install redux tool kit ---       npm install @reduxjs/toolkit

import React from "react";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

const TodoReduxToolKit = () => {
  return (
    <div
      className="row vh-100 d-flex align-items-center justify-content-top flex-column "
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <div className="col-md-12 py-4 px-0 bg-secondary-subtle rounded px-3">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default TodoReduxToolKit;
