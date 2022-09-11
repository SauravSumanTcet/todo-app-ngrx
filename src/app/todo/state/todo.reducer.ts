import { createReducer, on } from "@ngrx/store";
import { ToDo } from "src/app/model/todo.model";

import { addTodo, addTodoSuccess, deleteTodo, deleteTodoSuccess, loadTodoSuccess } from "./todo.actions";

export interface TodoList {
    todos: ToDo[]
}

export const initialState: TodoList = {
    todos: []
}

export const todoReducer = createReducer(
    initialState,
    // on(addTodo, (state, { todo }) => ({ todos: [...state.todos, todo] })),
    on(loadTodoSuccess, (state, { todos }) => {
        console.log(state, todos)
        return ({ todos: [...state.todos, ...todos] })
    }),
    // on(addTodo, (state, { todo }) => ({ todos: [...state.todos, todo] })),
    on(addTodoSuccess, (state, { todo }) => ({ todos: [...state.todos, todo] })),
    // on(deleteTodo, (state: any, { index }) => ({ todos: state.todos.filter((todo: ToDo, i: number) => i !== index) })),
    on(deleteTodoSuccess, (state: any, { index }) => ({ todos: state.todos.filter((todo: ToDo, i: number) => todo.id !== index) })),
)