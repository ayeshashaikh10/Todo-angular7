import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class TodoService {

  private tododata:any = [];
  private todoDonedata:any = [];
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

}
