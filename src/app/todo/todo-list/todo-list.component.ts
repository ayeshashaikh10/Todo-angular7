import { Component, OnInit, OnChanges, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { Todo } from "../todo";
import { TodoService} from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private data:TodoService ){}


  todoList=[];
  todoDone=[];
  newTodoList=[];
  incrementDoneId ='';
  incrementId=0;
  pendingMsg='';
  dataList:any;
  taskDate: Date;
  toggleAddTask=false;
  message:{};
  todayDate:Date;
  showDeleteAll:boolean=false;
  showToday:boolean=false;
  showTomr:boolean=false;
  todayTask=[];
  tomrTask=[];
  showEdit:boolean=false;
  editData ={};
  showSubTask:boolean=false;
  


  ngOnInit(){
  

    this.todayDate = new Date();
    this.dataList=this.data.getTodoData();
    if(this.dataList){
      this.todoList = this.data.getTodoData();
    }
    this.scheduleTodo();
  }

  showAddTask(){
    this.toggleAddTask=true;//!this.toggleAddTask;
  }
  
  
  // items:any = [
  //   { id : 1, name:'grocery'},
  //   { id : 2, name:'rent'},
  //   { id : 3, name:'telephone bill'},
  // ];

  
  
  todoItem: Todo={
    id:0,
    name:'',
    done:false,
    taskDate:this.taskDate
  }

  addTodoList(item){    
    if(this.todoList.length == 0){
      this.todoList= [
        {
          id:this.incrementId + 1,
          name:item,
          done:false,
          taskDate:this.taskDate
        }
      ];      
    }
    else{
      this.incrementId = this.todoList[this.todoList.length -1];
      this.incrementId = this.incrementId['id'] + 1
      this.todoList.push(
        {
          id:this.incrementId,
          name:item,done:false,     
          taskDate:this.taskDate
        }
      )
    }
    this.todoItem.name='';
    this.setTodoList();
    this.scheduleTodo();     
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
  
    this.todoList = this.todoList.filter(val=>{
      return val.id != item.id
    });

    this.setTodoList();
    this.scheduleTodo();
  }
  
  deleteAll(event){
    debugger;
    if(event.target.name == "today"){
      this.todoList = this.todoList.filter((item:any)=>{     
        return ((item.taskDate).setHours(0,0,0,0) != this.todayDate.setHours(0,0,0,0));
      });
      this.todayTask =[];      
    }
    else{
      this.todoList = this.todoList.filter((item:any)=>{     
        return ((item.taskDate).setHours(0,0,0,0) == this.todayDate.setHours(0,0,0,0));
      });
      this.tomrTask = [];
    }
  }

  

  setTodoList(){
    this.data.setTodoData(this.todoList)
  }
  
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  scheduleTodo(){
    this.todayTask=this.todoList;
    this.tomrTask=this.todoList;

    this.todayTask = this.todayTask.filter(item=>{
      return item.taskDate.setHours(0,0,0,0) == this.todayDate.setHours(0,0,0,0);
    });

    this.tomrTask = this.tomrTask.filter(item=>{
      return item.taskDate.setHours(0,0,0,0) > this.todayDate.setHours(0,0,0,0);
    });
  } 

  editTask(item){
    this.showEdit = true;
    this.editData = item;
  }

  addSubTask(){
  this.showSubTask=true;

  }

  cloneArr=[];
  count:number=0;
  cloneTextbox(){
    debugger;
    if(this.count == 0){
    const div = document.getElementById("showSubTask").lastChild;
    // div.remove();
    const clone = div.cloneNode(true);
    console.log(clone);
    document.getElementById("showSubTask").appendChild(clone);
    clone.addEventListener("focus",this.cloneTextbox);
      this.count=1;
    // this.cloneArr.push(1);
    }
    // else{
    //   this.count=0
    //   const txt = document.getElementById("showSubTask").firstChild;    
    //   txt.remove();
    // // this.cloneArr.pop();
    // }
  }

  name = 'Angular';
  subTask:string;
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('template') template: TemplateRef<any>;
 
  insertView(event) {
    debugger;
    const template = this.template.createEmbeddedView(null);

    
    if(this.count==0){ 
      this.subTask=event.target.value;      

      this.viewContainer.insert(template);
      this.count = 1;
    }    
    else{
      if(this.subTask == "" || this.subTask== undefined){
      this.viewContainer.remove();
      this.count=0;
      }
      else{
        this.viewContainer.insert(template);
        this.count = 1;
      }
  }
  }
}



