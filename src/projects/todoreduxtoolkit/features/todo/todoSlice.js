import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")),
  //todos: [{ id: 1, todoText: "Hellow World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoText: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          return { ...todo, todoChecked: !todo.todoChecked };
        }
        return todo;
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todoText: action.payload.todoText,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
