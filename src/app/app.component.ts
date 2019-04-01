import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar-app';
  myDateValue: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }

  customAction() {
    alert("Some custom action");
  }
}
