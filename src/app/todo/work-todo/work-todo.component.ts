import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo-service.service';

@Component({
  selector: 'app-work-todo',
  templateUrl: './work-todo.component.html',
  styleUrls: ['./work-todo.component.scss']
})
export class WorkTodoComponent implements OnInit {
  constructor(private data:TodoService ){}
  editTaskData=[];
  todoType="work";
  todoData=[];

  ngOnInit(){
        
  } 

  ngOnChanges(){
    // this.subTaskList = this.data.getEditData();
  }

  receiveSubTask($event){        
    this.editTaskData=$event;
    this.editTaskData = this.data.getEditData();
    
  }
  sendUpdatedData($event){
    this.todoData = $event;
    // this.todoData = this.get
  }

}
