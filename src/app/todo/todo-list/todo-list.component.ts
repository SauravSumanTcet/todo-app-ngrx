import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToDo } from 'src/app/model/todo.model';
import { selectTodos } from 'src/app/reducers';
import { TodoService } from 'src/app/service/todo.service';
import { loadTodo } from '../state/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoArr!: Observable<ToDo[]>
  constructor(private todoService: TodoService, private store: Store) { }

  ngOnInit(): void {
    /* this.todoArr = this.todoService.getTodo();

    this.todoService.todoAction$.pipe(tap(data => {
      if (data === '[todo] added')
        this.todoArr = this.todoService.getTodo();
    })).subscribe(); */

    this.todoArr = this.store.select(selectTodos).pipe(
      filter(todos => todos !== undefined),
      /* map(todos => {
        return todos.map((todo, id) => ({ ...todo, id }))
      }) */)

    this.store.dispatch(loadTodo());


  }

  todoAction(event: any) {
    /* if (event === `[todo] deleted`)
      this.todoArr = this.todoService.getTodo(); */
  }

}
