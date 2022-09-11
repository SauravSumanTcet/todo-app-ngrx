import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { todoReducer, TodoList } from '../todo/state/todo.reducer';


export interface State {
  todoList: TodoList
}
export const selectTodoFeature = createFeatureSelector<TodoList>('todoList');
export const selectTodos = createSelector(selectTodoFeature, (state) => state.todos);

function reducer(state: TodoList | undefined, action: Action): TodoList {
  return todoReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
  todoList: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
