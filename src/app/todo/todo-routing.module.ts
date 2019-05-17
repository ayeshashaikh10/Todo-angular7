import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { HomeComponent } from '../home/home.component';
import { EditTodoComponent} from "../todo/edit-todo/edit-todo.component";
import { PersonalTodoComponent } from "../todo/personal-todo/personal-todo.component";
import { WorkTodoComponent } from "../todo/work-todo/work-todo.component";
import { GroceryComponent } from "../todo/grocery/grocery.component";


const route: Routes=[
  
  {
    path:'todoDone',
    component:TodoDoneComponent
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
  },
  {
    path:'todoGrocery',
    component: GroceryComponent
  },
  {
    path:'',
    redirectTo:'/personalTodo',
    pathMatch:'full',
    // component:PersonalTodoComponent
  },

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
