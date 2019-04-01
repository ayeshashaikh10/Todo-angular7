import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoRoutingModule} from './todo-routing.module';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { TooltipModule } from 'angular-bootstrap-md'



@NgModule({
  declarations: [ TodoListComponent, TodoDoneComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),    
    TooltipModule.forRoot()
  ]
})
export class TodoModule { }
