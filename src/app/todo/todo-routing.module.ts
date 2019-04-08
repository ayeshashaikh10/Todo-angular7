import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { HomeComponent } from '../home/home.component';
import { EditTodoComponent} from "../todo/edit-todo/edit-todo.component";
import { PersonalTodoComponent } from "../todo/personal-todo/personal-todo.component";
import { WorkTodoComponent } from "../todo/work-todo/work-todo.component";


// const route: Routes=[]
const route: Routes=[
  
  {
    path:'todoDone',
    component:TodoDoneComponent
  },
  {
    path:'todoList',
    component:TodoListComponent
  },
  {
    path: 'editList',
    component:EditTodoComponent
  },
  {
    path:'personalTodo',
    component:PersonalTodoComponent
  },
  {
    path:'workTodo',
    component: WorkTodoComponent
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
