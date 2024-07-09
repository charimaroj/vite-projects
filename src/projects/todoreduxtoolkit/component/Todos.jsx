import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

import "./todos.css";

const Todos = () => {


  const todos = useSelector((state) => state.todos);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (

            <tr key={todo.id}><Todo todo={todo}/></tr>
//             <tr key={todo.id}>
// <Todo todo={todo} />
//             </tr>
            // <Todo todo={todo}/>
          
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
