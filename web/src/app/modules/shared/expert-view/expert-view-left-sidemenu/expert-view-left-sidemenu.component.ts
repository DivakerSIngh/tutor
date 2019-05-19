import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/expert/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/expert/profile', title: 'Profile',  icon:'person', class: '' },
  { path: '/expert/skill', title: 'Skill',  icon:'library_books', class: '' },
  { path: '/expert/notification', title: 'Notification',  icon:'notifications', class: '' },
  { path: '/expert/setting', title: 'Calender',  icon:'settings_applications', class: '' },    
  
];
@Component({
  selector: 'app-expert-view-left-sidemenu',
  templateUrl: './expert-view-left-sidemenu.component.html',
  styleUrls: ['./expert-view-left-sidemenu.component.css']
})

export class ExpertViewLeftSidemenuComponent implements OnInit {
  activeClass:number=1;
  
  menuItems: any[];
  userdetails:any;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  toggleLeftBar(){

  }
}
