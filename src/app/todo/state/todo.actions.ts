import { createAction, props } from '@ngrx/store';
import { ToDo } from 'src/app/model/todo.model';


export const loadTodo = createAction('[ToDo] Load');
export const loadTodoSuccess = createAction('[ToDo] Load Success', props<{ todos: ToDo[] }>());

export const addTodo = createAction('[ToDo] Add', props<{ todo: ToDo }>());
export const addTodoSuccess = createAction('[ToDo] Add Success', props<{ todo: ToDo }>());

export const deleteTodo = createAction('[ToDo] Delete', props<{ index: number | undefined }>());
export const deleteTodoSuccess = createAction('[ToDo] Delete Success', props<{ index: number | undefined }>());
