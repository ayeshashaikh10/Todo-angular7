import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo-service.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements OnInit {
  constructor(private data:TodoService ){}
  editTaskData=[];
  todoData=[];
  todoType="grocery";
  
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
