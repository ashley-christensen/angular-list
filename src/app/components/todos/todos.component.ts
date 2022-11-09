import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
	todos: Todo[]; //empty array of todos
	constructor() {}

	ngOnInit(): void {
		this.todos = [
			{
				content: 'First todo',
				completed: false,
			},
			{
				content: 'Second todo',
				completed: true,
			},
		];
	}
}
