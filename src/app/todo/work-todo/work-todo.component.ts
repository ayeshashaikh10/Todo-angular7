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
  todoData=[];
  todoType="work";


  ngOnInit(){
        
  } 

  ngOnChanges(){
    // this.subTaskList = this.data.getEditData();
  }

  receiveSubTask($event){        
    this.editTaskData=$event;   
  }

  sendtodoData($event){        
    this.todoData=$event;
  }
}
