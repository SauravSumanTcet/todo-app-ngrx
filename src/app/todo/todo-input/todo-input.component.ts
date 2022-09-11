import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, filter, tap } from 'rxjs';
import { ToDo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';
import { addTodo } from '../state/todo.actions';


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todo = new FormControl();
  constructor(private todoService: TodoService, private store: Store) { }

  ngOnInit(): void {
    this.todo.valueChanges.pipe(debounceTime(500), filter((data) => data !== ''), tap(value => {
      const todo: ToDo = {
        value
      }
      // this.todoService.addTodo(todo).pipe(tap(data => {
      //   this.todoService.todoAction$.next('[todo] added');
      // })).subscribe();
      this.store.dispatch(addTodo({ todo }));
      this.todo.setValue('')
    })).subscribe();
  }

}
