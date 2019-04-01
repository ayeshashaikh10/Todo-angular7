import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDirective } from './sidebar/sidebar.directive';
import { ExpandMenuDirective } from './sidebar/expand-menu.directive';
import { HomeComponent } from './home/home.component';
import { TodoModule } from './todo/todo.module';
import { TodoRoutingModule } from './todo/todo-routing.module';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputsModule, CheckboxModule, ButtonsModule, TooltipModule } from 'angular-bootstrap-md'




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarDirective,
    ExpandMenuDirective,
    HomeComponent,
    DatePickerComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoModule,
    TodoRoutingModule,
    BsDatepickerModule.forRoot(),
    InputsModule.forRoot(),
    CheckboxModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
