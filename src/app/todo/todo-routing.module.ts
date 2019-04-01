import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { HomeComponent } from '../home/home.component';



// const route: Routes=[]
const route: Routes=[
  
  {
    path:'todoDone',
    component:TodoDoneComponent
  },
  {
    path:'todoList',
    component:TodoListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class TodoRoutingModule { }
