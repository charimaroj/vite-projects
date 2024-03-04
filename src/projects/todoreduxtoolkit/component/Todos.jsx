import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reducers/todo/todoSlice";
import "./todos.css";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("")
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isStriped, setIsStriped] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };
  const editHandler=()=>{
    setIsTodoEditable(!isTodoEditable)
  }
  const updateHandler=(obj)=>{
    dispatch(updateTodo({id:obj.id, text:newTodo}))
    console.log(id, text)
  }
useEffect(()=>{
  localStorage.setItem('todos', ...todos)
}, [])

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
            <tr key={todo.id}>
              <th scope="row">
                <input type="checkbox" className="form-check-input" onChange={()=>setIsStriped(!isStriped)} />
              </th>
              <td className="w-80">
                <input
                  type="text"
                  className={`form-control ${
                    isStriped ? "text-decoration-line-through" : ""
                  } `}
                  value={todo.text}                  
                  disabled={!isTodoEditable}
                  onChange={(e)=>setNewTodo(e.target.value)}
                />
              </td>
              <td className="w-20">
                <div className="d-flex"></div>
                {!isTodoEditable ? (
                  <button type="button" className="btn btn-warning btn-sm mx-1" onClick={editHandler} disabled={isStriped}>
                    Edit
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary btn-sm mx-1" onClick={()=>{updateHandler(todo.id, newTodo)}}>
                    Save
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => deleteHandler(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
