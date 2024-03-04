import React, { useState } from "react";

import { useTodo } from "../context/TodoContext";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(true);
  const [isStriped, setIsStriped] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo } = useTodo();

  const editTodo = () => {   
    setIsTodoEditable(!isTodoEditable);
  };
  const saveTodo = () => {
    setIsTodoEditable(!isTodoEditable);
    updateTodo(todo.id, { ...todo, todo: todoMsg });
  };
  const toggleCompleted = () => {
    setIsStriped(!isStriped); //true
  };

  return (
    <>
      <th scope="row" className={`${isStriped? "border-bottom border-danger" :""}`}>
        <input
          type="checkbox"
          className="form-check-input"
          onChange={toggleCompleted}
        />
      </th>
      <td  className={`width-100 ${isStriped? "border-bottom border-danger" :""}`}>
        <input
          type="text"
          // className={`form-control text-decoration-line-through` }
          className={`form-control ${
            isStriped ? "text-decoration-line-through" : ""
          }`}
          value={todoMsg}
          disabled={isTodoEditable}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
      </td>
      <td className={`${isStriped? "border-bottom border-danger" :""}`}>
        <div className="btn-group btn-group-sm ">
          {isTodoEditable ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={editTodo}
              disabled={isStriped}
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={saveTodo}
            >
              Save
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
            disabled={!isStriped}
          >
            Delete
          </button>
        </div>
      </td>
    </>
  );
};

export default TodoItem;
