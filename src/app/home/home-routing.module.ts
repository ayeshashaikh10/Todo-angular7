import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

const homeRoute: Routes=[
  {
    path:'home',
    redirectTo:'/home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
