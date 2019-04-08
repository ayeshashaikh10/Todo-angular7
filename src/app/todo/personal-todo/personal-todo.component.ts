import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo-service.service';
import { TimePickerComponent } from "../../time-picker/time-picker.component"

@Component({
  selector: 'app-personal-todo',
  templateUrl: './personal-todo.component.html',
  styleUrls: ['./personal-todo.component.scss']
})
export class PersonalTodoComponent implements OnInit {
  constructor(private data:TodoService ){}
  editTaskData=[];
  todoType="personal"
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
