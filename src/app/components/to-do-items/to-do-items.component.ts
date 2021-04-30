import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  @Input() todo: Todo | undefined;

  constructor(private todoService:TodoService) { 
    
  }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo?.completed
    }

    return classes
  }

  onToggle(todo: any) {    
    //  Toggle on UI
    todo.completed = !todo.completed
    //  Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: any) {

  }

}
