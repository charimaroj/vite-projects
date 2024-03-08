import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
const [input, setInput] = useState("");
const dispatch = useDispatch()


const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
}
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="todoItem" className="form-label">
            Todo Item
          </label>
          <input
            type="text"
            className="form-control"
            id="todoItem"
            aria-describedby="emailHelp"
            
            onChange={(e)=>setInput(e.target.value)}
            value={input}
         
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
