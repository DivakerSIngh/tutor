import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ],
})
export class LoginComponent implements OnInit {
  visibilityChanged: String = "hidden";
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.visibilityChanged = "shown";
    }, 200);
  }

}
