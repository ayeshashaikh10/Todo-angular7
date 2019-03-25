import { Component, OnInit } from '@angular/core';
import { Todo } from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
  // items = [
  //   { id : 1, name:'grocery'},
  //   { id : 2, name:'rent'},
  //   { id : 3, name:'telephone bill'},
  // ];

  todoList =[];
  todoDone=[];
  newTodoList=[];
  incrementDoneId ='';
  incrementId=0;
  pendingMsg='';

  todoItem: Todo={
    id:0,
    name:'',
    done:false
  }

  addTodoList(item){
    if(this.todoList.length == 0){
      this.todoList= [{id:this.incrementId + 1,name:item,done:false}];
      // console.log(this.todoList)
    }
    else{
      this.incrementId = this.todoList[this.todoList.length -1];
      this.incrementId = this.incrementId['id'] + 1
      this.todoList.push({id:this.incrementId,name:item,done:false})
    }
    this.todoItem.name='';

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
  }

  deleteAll(){
    this.todoList=[];
  }

  ngOnInit() {
  }

}
