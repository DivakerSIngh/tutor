import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  allowOrNot:boolean=false;
  isMenu:boolean=false;
  visibilityChanged: String = "hidden";
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.visibilityChanged = "shown";
    }, 200);
  }
  toggleSideMenu() {
    this.isMenu = !this.isMenu
  }
}
