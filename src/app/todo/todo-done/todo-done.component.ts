import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service.service'; 
@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.scss']
})
export class TodoDoneComponent implements OnInit {
  todoDone=[];
  constructor(private data:TodoService) { }

  ngOnInit() {    
    this.todoDone=this.data.getTodoData();
    if(this.todoDone.length){
      this.todoDone = this.todoDone.filter(item =>{
        return item.done;
      })
    }
  }

}
