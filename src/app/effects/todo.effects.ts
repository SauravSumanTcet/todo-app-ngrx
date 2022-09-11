import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ToDo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType('[ToDo] Load'),
        mergeMap(() => this.todoService.getTodo()
            .pipe(
                map(todos => {
                    console.log("Todos", todos);
                    return ({ type: '[ToDo] Load Success', todos });
                }),
                catchError(() => EMPTY)
            ))
    ))

    addTodos$ = createEffect(() => this.actions$.pipe(
        ofType('[ToDo] Add'),
        mergeMap(({ todo }) => {
            console.log('Adding', todo)
            return this.todoService.addTodo(todo)
                .pipe(
                    map(todo => ({ type: '[ToDo] Add Success', todo })),
                    catchError(() => EMPTY)
                )
        })
    )
    );

    deleteTodos$ = createEffect(() => this.actions$.pipe(
        ofType('[ToDo] Delete'),
        mergeMap(({ index }) => this.todoService.deleteTodo(index).pipe(
            map(() => ({ type: '[ToDo] Delete Success', index })),
            catchError(() => EMPTY)
        ))
    ))

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) { }
}