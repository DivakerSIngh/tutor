import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-topic-status-calender',
  templateUrl: './topic-status-calender.component.html',
  styleUrls: ['./topic-status-calender.component.css']
})
export class TopicStatusCalenderComponent implements OnInit {
  model: NgbDateStruct;
  showWeekdays:boolean=true;

  constructor() { }
  ngOnInit() {
  }
  isWeekend(date: NgbDateStruct){
   var d = new Date(date.year,date.month,date.day)
   return d.getDay() === 6;
  }

}
