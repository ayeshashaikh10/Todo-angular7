import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { TodoService} from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private data:TodoService ){}


  ngOnInit(){
    // this.todoList = this.data.getTodoData();   
  } 

}



