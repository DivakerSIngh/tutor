import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class FooterComponent implements OnInit {
  IsFooterShow:Boolean=true;
  allowOrNot:boolean;
  isScrollButton = true;
  visibilityChanged: String = "hidden";
  
  year:number;
  constructor(private router: Router) {
    setTimeout(() => {
      this.visibilityChanged = "shown";
    }, 200);
   }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.IsFooterShow = (event.url !== '/login')
      }
    });
  }

}
