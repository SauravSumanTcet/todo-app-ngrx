import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoInputComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TodoInputComponent, TodoComponent,
    TodoListComponent]
})
export class TodoModule { }
