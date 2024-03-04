import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addItemHandler = (e) => {

    e.preventDefault()
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("")
  };

  return (
    <form  onSubmit={addItemHandler}> 
      <div className="mb-3">
        <label htmlFor="todoItem" className="form-label">
          Todo Item
        </label>
        <input
          type="text"
          className="form-control"
          id="todoItem"
          aria-describedby="emailHelp"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
       
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
