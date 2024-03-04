import React, { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

const TodoContextLocal = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {

    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
      
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
   
  };

  // const toggleTodo = (id) => {
  //   setTodos((prev) =>
  //     prev.map((prevTodo) =>
  //       prevTodo.id === id
  //         ? { ...prevTodo, completed: !prevTodo.completed }
  //         : prevTodo
  //     )
  //   );
  // };


  //while application loading local stored todos will display - one time


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  // every todo item action local storage will update
  useEffect(()=>{

    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
    
      <div
        className="row vh-100 d-flex align-items-center justify-content-top flex-column"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <div className="col-md-12 py-4 px-0">
          <TodoForm/>      

          <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>    
      {/* <tr>
          <th scope="row">1</th>
          <td className="w-100">Mark</td>
          <td>
            <div className="btn-group btn-group-sm ">          
                <button type="button" className="btn btn-warning">
                  Edit
                </button>        
                <button type="button" className="btn btn-success">
                  Save
                </button>      
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </td>
        </tr>    */}

          {todos.map((todo, index)=>{
         
           return   <tr key={index} ><TodoItem  todo = {todo}/></tr>
           
          })}
          </tbody>
        </table>
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoContextLocal;
