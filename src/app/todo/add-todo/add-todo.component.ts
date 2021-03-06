import { Component, OnInit, OnChanges, ViewChildren, EventEmitter, Output, Input } from '@angular/core';
import { CollapseComponent} from 'angular-bootstrap-md';

import { Todo } from "../todo";
import { TodoService} from '../todo-service.service';
import { CollapseDirective } from 'ngx-bootstrap';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit, OnChanges {


  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  
  ngAfterViewInit() {    
      // this.collapses.forEach((collapse: CollapseComponent) => {
      //   collapse.toggle();
      // });
      this.collapses.forEach(collapse =>collapse.toggle());

  }

  constructor(private data:TodoService ){}


  todoList=[];
  todoDone=[];
  newTodoList=[];
  incrementDoneId ='';
  incrementId=0;
  pendingMsg='';
  dataList:any;
  taskDate: any ;
  toggleAddTask=false;
  message:{};
  minDate=new Date();
  todayDate:any = new Date().setHours(0,0,0,0)
  showDeleteAll:boolean=false;
  showToday:boolean=false;
  showTomr:boolean=false;
  todayList=[];
  upcomingList=[];
  showEdit:boolean=false;
  
  subTask:string;
  subTaskList=[];
  editTaskList=[];
  personalTodo=[];
  workTodo=[];
  todoTypeFilter:string;
  isDisabled=true;

  @Output() editTaskData = new EventEmitter<any>();
  @Input() todoType:string;  
  @Input () todoData =[];

  

  ngOnInit(){
    
    this.dataList=this.data.getTodoData();
    if(this.dataList){
      this.todoList = this.dataList;
      this.scheduleTodo();
    }
  }

  showAddTask(){
    this.toggleAddTask=true;//!this.toggleAddTask;
  }
  
  ngOnChanges(){
    
    this.isDisabled = this.todoItem.name ? false:true;
    this.todoDone = this.data.getTodoDoneData();
    
    this.dataList=this.data.getTodoData();
    if(this.dataList){
      this.todoList = this.dataList;
      this.scheduleTodo();
    }
  }
  
  // items:any = [
  //   { id : 1, name:'grocery'},
  //   { id : 2, name:'rent'},
  //   { id : 3, name:'telephone bill'},
  // ];
   
  todoItem: Todo={
    taskId:0,
    name:'',
    done:false,
    taskDate:this.taskDate,
    todoType:''
  }

  addTodoList(item){        
    
    if(this.todoList.length == 0){
      this.todoList= [
        {
          taskId:this.incrementId + 1,
          name:item,
          done:false,
          taskDate:this.todayDate,
          todoType:this.todoType
        }
      ];      
    }
    else{
      this.incrementId = this.todoList[this.todoList.length -1];
      this.incrementId = this.incrementId['taskId'] + 1
      this.todoList.push(
        {
          taskId:this.incrementId,
          name:item,done:false,     
          taskDate:this.todayDate,
          todoType:this.todoType
        }
      )
    }

    this.todoItem.name='';
    this.taskDate='';
    this.setTodoList();

//     this.sendTodoData.emit(this.todoList);

   this.scheduleTodo();     
   this.editTask(this.todoList[this.todoList.length-1]);
  }

  addTodoDone(item){
    // this.todoDone.push({id:item.id,name:item.name});
    // this.todoList = this.todoList.filter(val=>{
    //   return val.id != item.id
    // });
    // if(this.todoList.length==0){
    //   this.pendingMsg='No more pending items';
    // }
  }

  deleteTodo(item){  
    debugger;
    this.todoList = this.todoList.filter(val=>{
      return val.taskId != item.taskId
    });

    this.setTodoList();
    this.scheduleTodo();
    this.editTask(this.todoList[0])
  }
  
  deleteAll(event){
    
    if(event.target.name == "today"){
      this.todoList = this.todoList.filter((item:any)=>{     
        return (item.taskDate != this.todayDate);
      });
      this.todayList =[];      
    }
    else{
      this.todoList = this.todoList.filter((item:any)=>{     
        return (item.taskDate == this.todayDate);
      });
      this.upcomingList = [];
    }
  }

  setTodoList(){
    this.data.setTodoData(this.todoList)
  }
  
  onDateChange(newDate: Date) {
    
  }

  scheduleTodo(){
    if(this.todoType=="personal"){
      this.todoTypeFilter = "personal"
    }
    else if(this.todoType == "grocery"){
      this.todoTypeFilter = "grocery";
    }
    else{
      this.todoTypeFilter = "work"
    }

    this.todayList = this.todoList.filter(item=>{
      return (item.todoType == this.todoTypeFilter && item.taskDate == this.todayDate);
    });

    this.upcomingList = this.todoList.filter(item=>{
      return (item.todoType == this.todoTypeFilter && item.taskDate > this.todayDate);        
    });  
  } 
  
  editTask(item){    
     
    this.subTaskList =[];
    this.editTaskList =[];
    if(item!=undefined){
      this.subTaskList = this.data.getSubTask();    
      this.editTaskList.push(item);    
    }
    this.editTaskData.emit(this.editTaskList);
    this.data.setEditData(this.editTaskList);
  }

  
  // @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  // @ViewChild('template') template: TemplateRef<any>;
 
  insertView(event) {
    //   
    //   const template = this.template.createEmbeddedView(null);
    //   let input = event.target.nextElementSibling;
    //   while(input){
    //     if(input.nodeName == "INPUT") break;
    //     input = input.nextElementSibling;
    //   } 
      
    //   if(input != null){
    //     this.viewContainer.remove();
  
    //   }
    //   else{
    //     this.viewContainer.insert(template);
    //   }
    //   // if(this.count==0){ 
              
    //   //   this.subTask=event.target.value;
  
    //   //   this.viewContainer.insert(template);
    //   //   this.count = 1;
    //   // }    
    //   // else{
    //   //   this.subTask=input.value;
    //   //   if(this.subTask == "" || this.subTask== undefined){
    //   //   this.viewContainer.remove();
    //   //   this.count=0;
    //   //   }
    //   //   else{
    //   //     this.viewContainer.insert(template);
    //   //     this.count = 1;
    //   //   }
    //   // }
     }

     
    
}
