import { Component, OnInit, OnChanges, ViewContainerRef, ViewChild, TemplateRef, Input, Output ,EventEmitter } from '@angular/core';
import { subTodo } from "../todo";
import { TodoService} from '../todo-service.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit , OnChanges {
 
  subTask:string;
  subTaskList=[];
  incrementId=0;
  subTaskData=[];
  note='';
  taskNote=[];
  display='none';
  taskNoteObj={
    note:''
  }

  reminderTime='';
  reminderDate:any = new Date();
  reminderDisplay='none';

  check_true =false;
  taskType='';
  todoList =[];

  @Input () editTaskData =[];
  @Input() todoType:string;  
  @Output() todoData = new EventEmitter<any>();

  

  prev_link= '';
  showEditTask = false;
  disableSubTask=false;
  
  subTaskItem: subTodo={
    subTaskId :0,
    subTaskName:'',
    subTaskDone: false,
    subTaskDate:new Date().setHours(0,0,0,0),
    taskId : 0,
    notes:''
  }

  constructor(private data:TodoService ){}

  ngOnInit() {
    
    this.taskType= this.todoType;
    this.todoList = this.data.getTodoData();    
  }

  ngOnChanges(){     
    debugger;
    this.todoList = this.data.getTodoData();  
    if(this.todoList.length){
      this.todoList = this.todoList.map(item=>{
        if(item.taskId == this.editTaskData[0].taskId){          
            this.disableSubTask = item.done          
        }
        return item;
      })
    }

    this.subTaskData=this.data.getSubTask();
    
    if(this.subTaskData){
      this.subTaskList = this.subTaskData;
    }

    this.subTaskList = this.subTaskList.filter(item=>{
      return this.editTaskData[0].taskId ==  item.taskId
    })

    this.taskNote = this.data.getTaskNote();
    if(this.taskNote.length){
      this.taskNoteObj = this.taskNote.find(note =>{
        return note.taskId == this.editTaskData[0].taskId 
      })
      this.note = this.taskNoteObj ? this.taskNoteObj.note :''    
    }    
    
    if(this.editTaskData.length){
      this.prev_link = this.data.getPrevLink();
      this.showEditTask = true;

      // if(this.prev_link == this.todoType){
      //   this.showEditTask = true;
      // }
      // else{
      //   this.showEditTask = false;
      //   this.data.setPrevLink(this.todoType)
      // }
      
      this.reminderTime = this.editTaskData[0].taskReminder
      this.reminderDate = new Date(this.editTaskData[0].taskDate);
    }
    else{
      this.showEditTask = false;
    }
  }

  addSubTask(){     
    this.subTaskList = this.data.getSubTask();

    if(this.subTaskList.length == 0){
      this.subTaskList.push(
        {
          subTaskId : this.incrementId +1,
          subTaskName:  this.subTask, 
          subTaskDate: this.editTaskData[0].taskDate,
          taskId: this.editTaskData[0].taskId
          
        }
      );      
    }
    else{
      this.incrementId = this.subTaskList[this.subTaskList.length -1];
      this.incrementId = this.incrementId['subTaskId'] + 1
      this.subTaskList.push(
        {
          subTaskId:this.incrementId,
          subTaskName:this.subTask,
          subTaskDate:this.editTaskData[0].taskDate,
          taskId: this.editTaskData[0].taskId
        }
      )
    }
    this.subTask='';
    this.data.setSubTask(this.subTaskList);
    
    this.subTaskList = this.subTaskList.filter(item=>{
      return this.editTaskData[0].taskId ==  item.taskId
    })
  }

  deleteSubTask(item){    
    this.subTaskList = this.subTaskList.filter(val=>{
      return val.subTaskId != item.subTaskId
    });

    this.data.setSubTask(this.subTaskList);
  }

  addNotes(){        
   this.taskNote.push({
     taskId:this.editTaskData[0].taskId,
     note:this.note
   });
   this.data.setTaskNote(this.taskNote);
  }
  openReminderDialog(){
    this.reminderDisplay = 'block'
  }

  closeReminderDialog(){
    this.reminderDisplay = 'none';
    // if(this.reminderTime != ''){
    //   this.editTaskData = this.editTaskData.map(item=>{
    //     item.taskReminder = this.reminderTime
    //     return item
    //   })
    //   this.data.setEditData(this.editTaskData)
      
    // }
    
    this.editTaskData = this.editTaskData.map(item=>{
      item.taskReminder = this.reminderTime
      item.taskDate = this.reminderDate.setHours(0,0,0,0)
      return item
    })
    this.todoList = this.todoList.map(item=>{
      if(item.taskId == this.editTaskData[0].taskId){
      item.taskReminder = this.reminderTime
      item.taskDate = this.reminderDate.setHours(0,0,0,0)
      }
      return item
    })
    this.data.setEditData(this.editTaskData)
    this.data.setTodoData(this.todoList)
    this.todoData.emit(this.todoList)
  }

  openModalDialog(){
    this.display='block'
  }

  closeModalDialog(){
    this.display='none'
  }

  customizeTodo(task_type){        
    debugger;
    this.editTaskData[0].todoType = task_type;
    this.data.setEditData(this.editTaskData);
    this.todoList = this.todoList.map(item =>{
      if(item.taskId == this.editTaskData[0].taskId ){
         item.todoType = task_type
      }
      return item;

    });
    this.todoData.emit(this.todoList);

    this.data.setTodoData(this.todoList)
    this.display='none'
    // if(this.taskType != task_type){
    //   this.showEditTask = false
    // }
    this.taskType = task_type;
    this.editTaskData = this.todoList[0];
    this.todoData.emit(this.editTaskData)    
  }

  clearData(){
    this.subTask = '';
  }
}
