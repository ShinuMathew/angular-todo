import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[]
    // Constructor is mostly used to import services    

  // Constructor is mostly used to import services
  constructor(private todoService:TodoService) {
    this.todos = []
   }

  // ngOnInit : is a lifecycle method like componentDidMount in react 
  ngOnInit(): void {    
    this.todoService.getToDos().subscribe(todos => {
      this.todos = todos
    });
  }

}
