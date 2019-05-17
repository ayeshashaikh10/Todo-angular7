import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo-service.service';

@Component({
  selector: 'app-personal-todo',
  templateUrl: './personal-todo.component.html',
  styleUrls: ['./personal-todo.component.scss']
})
export class PersonalTodoComponent {
  constructor(private data:TodoService ){}
  editTaskData=[];
  todoData =[];
  todoType="personal"
    
  receiveSubTask($event){        
    this.editTaskData=$event;
  }

  sendtodoData($event){        
    this.todoData=$event;
  }
}
