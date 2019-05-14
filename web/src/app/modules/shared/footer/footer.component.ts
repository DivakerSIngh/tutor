import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  IsFooterShow:Boolean=true;
  allowOrNot:boolean;
  isScrollButton = true;
  
  year:number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.IsFooterShow = (event.url !== '/login')
      }
    });
  }

}
