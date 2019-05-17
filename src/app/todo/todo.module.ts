import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoRoutingModule } from './todo-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TooltipModule, CollapseModule,InputsModule } from 'angular-bootstrap-md';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { PersonalTodoComponent } from './personal-todo/personal-todo.component';
import { WorkTodoComponent } from './work-todo/work-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxDatePickerModule } from 'igniteui-angular';
import { GroceryComponent } from './grocery/grocery.component';


@NgModule({
    declarations: [
        TodoDoneComponent,
        EditTodoComponent,
        AddTodoComponent,
        PersonalTodoComponent,
        WorkTodoComponent,
        GroceryComponent,
    ],
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        IgxTimePickerModule,
        CollapseModule.forRoot(),
        IgxDatePickerModule,
        InputsModule.forRoot()
    ]
})
export class TodoModule {
}
