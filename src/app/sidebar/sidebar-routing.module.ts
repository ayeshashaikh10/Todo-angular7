import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component'
// import { TodoListComponent } from '../todo/todo-list/todo-list.component';

// const routes: Routes=[
//   {
//     path:'home',
//     component:HomeComponent
//   },
//   {
//     path:'todoList',
//     component:TodoComponent
//   }
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule//.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class SidebarRoutingModule { }
