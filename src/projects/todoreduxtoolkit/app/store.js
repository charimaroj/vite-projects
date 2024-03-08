import { configureStore } from "@reduxjs/toolkit"; //step1:configure store

import todoReducer from "../features/todo/todoSlice"; //import reducer


export const store = configureStore({ reducer: todoReducer });
