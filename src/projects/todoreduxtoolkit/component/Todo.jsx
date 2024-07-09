import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todo = ({ todo, setTodos }) => {
  const [isStriped, setIsStriped] = useState(false);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState(todo.todoText);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };
  const editHandler = () => {
    setIsTodoEditable(!isTodoEditable);
  };
  const updateHandler = (obj) => {
    setIsTodoEditable(!isTodoEditable);
    dispatch(updateTodo({ id: obj.id, todoText: todoText }));
  };

  return (
    <>
      <th scope="row">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => setIsStriped(!isStriped)}
        />
      </th>
      <td className="w-80">
        <input
          type="text"
          className={`form-control ${
            isStriped ? "text-decoration-line-through" : ""
          } `}
          value={todoText}
          disabled={!isTodoEditable}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </td>
      <td className="w-20">
        <div className="d-flex"></div>
        {!isTodoEditable ? (
          <button
            type="button"
            className="btn btn-warning btn-sm mx-1"
            onClick={editHandler}
            disabled={isStriped}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm mx-1"
            onClick={() => {
              updateHandler({ id: todo.id, todoText });
            }}
          >
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
    </>
  );
};

export default Todo;
