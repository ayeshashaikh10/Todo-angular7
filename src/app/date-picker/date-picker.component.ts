import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  myDateValue: Date;
  
  public dateTime3: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }

  customAction() {
    alert("Some custom action");
  }
}
