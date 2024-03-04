import { createContext, useContext } from "react";

//create context
export const TodoContext = createContext({
  todos: [{ id: 1, todo: "todo msg", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

//create custom hook - 'useTodo'
export const useTodo = () => {
  return useContext(TodoContext);
};

//create todo provider
export const TodoProvider = TodoContext.Provider;
