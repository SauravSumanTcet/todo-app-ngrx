import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoAction$ = new Subject<string>();

  baseUrl = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) { }

  addTodo(todo: ToDo) {
    const url = `${this.baseUrl}`;
    return this.http.post(url, todo);
  }

  deleteTodo(id: number | undefined) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  getTodo() {
    const url = `${this.baseUrl}`;
    return this.http.get<ToDo[]>(url);
  }
}
