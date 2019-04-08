import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class TodoService {

  private tododata:any = [];
  private todoDonedata:any = [];
  private todoEditData:any = [];
  private todoSubTask:any=[];
  private taskNote:any=[];
  private prev_link = '';

  setTodoData(data:any){
    this.tododata=data;
  }
  getTodoData():any{
    return this.tododata;
  }
  setTodoDoneData(data:any){
    this.todoDonedata=data;
  }
  getTodoDoneData():any{
    return this.todoDonedata;
  }
  setEditData(data:any){
    this.todoEditData = data; 
  }
  getEditData():any{
    return this.todoEditData;
  }
  setSubTask(data:any){
    this.todoSubTask = data;
  }
  getSubTask():any{
    return this.todoSubTask;
  }

  setTaskNote(data:any){
    this.taskNote = data;
  }

  getTaskNote():any{
    return this.taskNote;
  }
  setPrevLink(data:any){
    this.prev_link = data;
  }

  getPrevLink():any{
    return this.prev_link;
  }

}
