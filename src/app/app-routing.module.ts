import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
// const routes: Routes = [];

const routes: Routes = [{
  path:'home',
  component:HomeComponent
  // redirectTo:'/home',
  // pathMatch:'full'
  },
  // {
  //   path:'todoList',
  //   component:TodoListComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
